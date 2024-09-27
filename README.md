
# ProScan 2.0

ProScan App - Version 2.0



## Installation

#### Install with npm

```bash
  npm install
```

keytool -genkey -v -keystore com.carmd.proscan2.jks -alias com.carmd.proscan2 -keyalg RSA -sigalg SHA1withRSA -keysize 2048 -validity 10000


## Build Release

#### Environment

```
  npm run setup-android-env
```

#### Android

```
  npm run android-build-prod-apk
  npm run android-build-prod-aab
```

#### iOS

```
  npm run ios-prepare-prod
  open xCode and Archive
```

## Build Android

`export JAVA_HOME=/Applications/Android\ Studio.app/Contents/jre/Contents/Home`
`export PATH=$JAVA_HOME/bin:$PATH`

