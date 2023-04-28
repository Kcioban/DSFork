# Navegando entre telas Screens - Aula03

- Navigator (Telas)
  - Screens
  - Componentes
- REGEX
  - MaskInput
## Navigator (Telas)
Uma das maneiras mais simples de navegar entre telas de um App é utilizando o componente **Navigation**, para isso instalamos as seguintes dependências.

## REGEX
Padrão para identificar string ou numeros e formatar de acordo com o necessario

### Dependencias:
- 1. Iniciar com "npx expo init"

- 2. Instalar as dependencias
```cmd
    yarn add @react-navigation/native
    yarn add react-native-safe-area-context
    yarn add react-native-screens
    yarn add react-native-svg
    yarn add @react-navigation/native-stack
    yarn add react-native-mask-input
```

- 3. Criar duas pastas
    - screens
    - components

- 4. Importar no topo do arquivo app.js os arquivos
    ```javascript
    import { createNativeStackNavigator } from '@react-navigation/native-stack';
    import { NavigationContainer } from '@react-navigation/native';
    ```

- 5. Adicionar no seu return
    ```javascript
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={LoginForm}
                    options={{ title: 'Bem vindo ' }} />
                <Stack.Screen
                    name="Dashboard"
                    component={Dashboard}
                    options={{ title: 'Dashboard' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
    ```
### Exemplo:
[my-app](./my-app/)

### EXERCICIO
Desenvolva um App com tela de login que direciona a tela que calcula Empréstimos
- A. Criar a tela de juros
- B. Criar o componente de calculo de juros
- C. Fazer a pagina de login 
- D. Validar o login
- E. Ir para pagina de juros

#### OBS: usar maskinput no componente de calculo de juros

##### Formula do juros composto
- M = C * (1 + i)^t
- M = montante
- C = capital
- i = taxa de juros
- t = tempo