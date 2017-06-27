
### project structure:

- The overall structure:

    1. 'app/' -- front-end coding
    2. 'server/' -- server-end coding, also including the final coding in 'public/' by gulp.js execute.
    3. 'tasks/' -- coding used to deal with project structure in gulp methods.
    4. 'gulpfile.babel.js' -- the entrance file, which loads all files under 'tasks' folder.
    5. '.babelrc' -- used to deal with the ej6 coding.
    6. 'package.json' -- used to deal with package dependencies.
    7. '.gitignore' -- used to ignore the files or folders when upload to github.

- Structure process:
    
    1. input CLI 'express -e' to create the default 'server' folder.
    2. create 'app' folder to create the front-end coding, including .css, .js and .ejs.
    3. create 'tasks' folder coding the gulp methods to complete the project structure.
    4. in the folder 'tasks', we create the different tasks to focus on different coding files, and ensure that the front-end page will re-render whenever the coding files change, as well as the original files uglified and re-stored. 
    5. 
- Porject Target:
    
    All ES6 codings are in 'app/' directory, and the purpose is to be familiar with the ES6 syntax and modularization structure.
    
- How to run:
    
    1. Run 'npm i' under 'ES6-LotteryApp/' and 'npm i' under 'ES6-LotteryApp/server' directory in the 'terminal', and then run 'gulp --watch' to open the server end, at last, open the browser by input address 'localhost:3000'.

    2. In the browser, we can select the different betting numbers by multiply clicking the 0-11 numbers, singly clicking the 'quick pick' buttons, or just clicking the 'random number'. When you select the different numbers, it will show the different bonus combination.  

























