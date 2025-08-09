# Casos de Teste – Login (SauceDemo)

## TC001 – Login válido
**Pré-condição:** Acesso à página de login.  
**Passos:**
1. Acessar /.
2. Preencher usuário: standard_user.
3. Preencher senha: secret_sauce.
4. Clicar em **Login**.
**Resultado esperado:** Redirecionar para /inventory.html e exibir título **Products**.

## TC002 – Senha inválida
**Pré-condição:** Acesso à página de login.  
**Passos:**
1. Acessar /.
2. Preencher usuário: standard_user.
3. Preencher senha: senha_errada.
4. Clicar em **Login**.
**Resultado esperado:** Exibir mensagem de erro contendo **"Username and password do not match"**.

## TC003 – Campos vazios
**Pré-condição:** Acesso à página de login.  
**Passos:**
1. Acessar /.
2. Deixar usuário e senha em branco.
3. Clicar em **Login**.
**Resultado esperado:** Exibir erro solicitando o preenchimento de **Username** (ou mensagem equivalente).
