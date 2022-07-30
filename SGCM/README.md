
# topicos-emergentes
Repositório da disciplina Tópicos Emergentes em Desenvolvimento Web

# Como inciar a aplicação

## Back-end
```
cd back-end
mvn package
java -jar target\sgcmapi.jar
```
Ou
```
cd back-end
mvn spring-boot:run
```
A aplicação vai iniciar no endereço https://localhost:9000, com acesso local a base de dados MySQL, por meio da porta padrão 3306, além de usuário e senha "root".

## Front-end
Para iniciar a aplicação, é necessário também instalar as dependências do projeto.
```
cd front-end
npm install
ng serve --ssl
```
A aplicação vai iniciar no endereço https://localhost:4200.

# Sites de referência

- Machine Learning Mastery: https://machinelearningmastery.com/
- Weka Wiki: https://waikato.github.io/weka-wiki/

# Ferramentas

- **MySQL**
  - https://dev.mysql.com/downloads/windows/installer/8.0.html
  - Configurar a variável de ambiente PATH. Exemplo: “C:\Program Files\MySQL\MySQL Server 8.0\bin”
  - Importar dados: mysql -u root -p sgcm < sgcm.sql
  - Criar conta no https://www.freemysqlhosting.net/
- **Talend Open Studio for Data Integration**
  - https://www.talend.com/lp/open-studio-for-data-integration/
- **Google Data Studio**
  - https://datastudio.google.com/
- **Weka**
  - https://prdownloads.sourceforge.net/weka/weka-3-8-6-azul-zulu-windows.exe
- **Git**
  - https://git-scm.com/downloads
- **Visual Studio Code**
  - https://code.visualstudio.com/Download
- **Extension Pack for Java**
  - https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack
- **Spring Boot Extension Pack**
  - https://marketplace.visualstudio.com/items?itemName=pivotal.vscode-boot-dev-pack
- **Angular Language Service**
  - https://marketplace.visualstudio.com/items?itemName=Angular.ng-template
- **JDK 11**
  - https://www.oracle.com/br/java/technologies/javase/jdk11-archive-downloads.html
  - Criar a variável de ambiente JAVA_HOME configurada para o diretório de instalação do JDK. Exemplo: “C:\Program Files\Java\jdk-11.0.13”.
  - Adicionar “%JAVA_HOME%\bin” na variável de ambiente PATH.
  - Tutorial de configuração: https://mkyong.com/java/how-to-set-java_home-on-windows-10/
- **Maven**
  - https://maven.apache.org/download.cgi
  - Adicionar o diretório de instalação do Maven na variável de ambiente PATH. Exemplo: “C:\apache-maven\bin”.
  - Tutorial de instalação: https://mkyong.com/maven/how-to-install-maven-in-windows/



