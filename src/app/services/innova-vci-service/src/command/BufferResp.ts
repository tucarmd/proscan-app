export class BufferResp {

    private command = 0;
    private isCompleted = false;
    private payload = [];

    private expectedLength = 0;
    private error = {};


    constructor(private buffer, private fLog) {


        this.isCompleted = false
        this.payload = []
        this.expectedLength = 0
        this.error = {}

        //Parse the 1st buffer
        this.command = buffer[1] - 1
        let type = buffer[0]
        if (type === 0xDD) {
            this.parseFeedback(buffer)
        }
        else if (type === 0xDA) {

            this.parseData(buffer)

        }
        else {
            this.isCompleted = true
            this.error = { code: 0, message: 'Corrupted packet' }
            this.payload = []
        }
    }
    logger(t) {

        this.fLog && this.fLog(t)
    }
    translateError(code) {
        let knownErrors = {
            0: "No Error",
            2: "Request without correct response from vehicle",
            3: "Parameter is not matched with spec",
            4: "Message is not supported",
            5: "General error",
            6: "process is not ready , need to retry in next time example retry in 100ms",
            7: "Need to restart write flash present section again",
            8: "Already have it"
        }
        return knownErrors[code] || `Error response with code ${code}`
    }

    parseFeedback(buffer) {
        let res = buffer[4]
        this.isCompleted = true

        if (res === 0xC2) {
            let code = buffer[5]
            let message = this.translateError(code)
            this.error = { code, message }
        }
        else if (buffer[1] === 0xcf &&
            buffer[2] === 2 &&
            buffer[3] === 0) {
            this.payload = [buffer[4], buffer[5]]
        }
        else {
            this.payload = []
        }
    }

    parseData(buffer) {
        if (this.expectedLength === 0) {
            this.expectedLength = buffer[2] + (buffer[3] * 256)
        }

        //Data which include the checksum
        let data = buffer.slice(4, buffer.length)
        this.appendData(data)
    }

    appendData(data) {

        this.payload = this.payload.concat(data)
        //If payload is ready eg = expected-length + checksum
        this.isCompleted = (this.payload.length >= this.expectedLength + 1)
        // console.log(`append response payload: ${this.payload.length}, expected: ${this.expectedLength}`)
        if (this.isCompleted) {
            this.payload = this.payload.slice(0, this.payload.length - 1)
        }

        return this
    }
}
