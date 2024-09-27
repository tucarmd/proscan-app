"use strict";
exports.__esModule = true;
var BufferResp = /** @class */ (function () {
    function BufferResp(buffer, fLog) {
        this.buffer = buffer;
        this.fLog = fLog;
        this.command = 0;
        this.isCompleted = false;
        this.payload = [];
        this.expectedLength = 0;
        this.error = {};
        this.isCompleted = false;
        this.payload = [];
        this.expectedLength = 0;
        this.error = {};
        //Parse the 1st buffer
        this.command = buffer[1] - 1;
        var type = buffer[0];
        if (type === 0xDD) {
            this.parseFeedback(buffer);
        }
        else if (type === 0xDA) {
            this.parseData(buffer);
        }
        else {
            this.isCompleted = true;
            this.error = { code: 0, message: 'Corrupted packet' };
            this.payload = [];
        }
    }
    BufferResp.prototype.logger = function (t) {
        this.fLog && this.fLog(t);
    };
    BufferResp.prototype.translateError = function (code) {
        var knownErrors = {
            0: "No Error",
            2: "Request without correct response from vehicle",
            3: "Parameter is not matched with spec",
            4: "Message is not supported",
            5: "General error",
            6: "process is not ready , need to retry in next time example retry in 100ms",
            7: "Need to restart write flash present section again",
            8: "Already have it"
        };
        return knownErrors[code] || "Error response with code " + code;
    };
    BufferResp.prototype.parseFeedback = function (buffer) {
        var res = buffer[4];
        this.isCompleted = true;
        if (res === 0xC2) {
            var code = buffer[5];
            var message = this.translateError(code);
            this.error = { code: code, message: message };
        }
        else if (buffer[1] === 0xcf &&
            buffer[2] === 2 &&
            buffer[3] === 0) {
            this.payload = [buffer[4], buffer[5]];
        }
        else {
            this.payload = [];
        }
    };
    BufferResp.prototype.parseData = function (buffer) {
        if (this.expectedLength === 0) {
            this.expectedLength = buffer[2] + (buffer[3] * 256);
        }
        //Data which include the checksum
        var data = buffer.slice(4, buffer.length);
        this.appendData(data);
    };
    BufferResp.prototype.appendData = function (data) {
        this.payload = this.payload.concat(data);
        //If payload is ready eg = expected-length + checksum
        this.isCompleted = (this.payload.length >= this.expectedLength + 1);
        // console.log(`append response payload: ${this.payload.length}, expected: ${this.expectedLength}`)
        if (this.isCompleted) {
            this.payload = this.payload.slice(0, this.payload.length - 1);
        }
        return this;
    };
    return BufferResp;
}());
exports.BufferResp = BufferResp;
