# Minicurso React Native

### Apresentação

<https://github.com/juninmd/curso-react-native>

## Android

### Listagem de emuladores Android

```sh
    emulator -list-avds
```

### Executar máquina virtual pela linha de comando

```sh
    emulator -avd Nexus_S_API_23
```

### Teste no dispositivo (DEBUG)

```sh
    react-native run-android
```

### Caso dê algum erro generico utilize

```sh
    cd android && .\gradlew clean
```

### INSTALL_FAILED_UPDATE_INCOMPATIBLE

```sh
* What went wrong:
Execution failed for task ':app:mergeDebugResources
```

> Significa que você deverá desinstalar a versão anterior no app e instalar a atual novamente

### Enviar comando para mostrar menu

```sh
    adb shell input keyevent 82
```

### Depuração

```sh
    adb reverse tcp:8081 tcp:8081
```

### Instalação Fabric

```sh
    https://fabric.io/kits/android/crashlytics/install

    https://www.fabric.io/downloads/android.
```

### Gerar Release

<https://facebook.github.io/react-native/docs/signed-apk-android.html>

### Caso for instalar no celular, você pode utilizar o seguinte comando

```sh
    react-native run-android --variant=release
```

### Upload Fabric

```sh
cd android
./gradlew.bat assembleRelease crashlyticsUploadDistributionRelease
```

