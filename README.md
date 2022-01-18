# OpencvAngular

> # This library was create to help angular user to use Opencv library

## How to set up

> - ### If you use vscode in Windows/Linux, just type Ctrl + shift + P and write `angular.json`

> - ### If you use using Mac, just type control + shift + P and write `angular.json`

> - ### If you use another code editor you can search the file angular.json

> - ### Now, you need to edit angular.json

## <div style="background:red;color:white"> Section assets</div>

> `"assets": [

              {
                "glob": "**/*",
                "input": "./projects/opencv-angular-lib/assets",
                "output": "/assets/"
              },
              {
                "glob": "**/*",
                "input": "src/assets",
                "output": "/assets/"
              },
              "src/favicon.ico"
            ],`

## <div style="background:red;color:white"> Section scripts</div>

> ` "scripts": [

              "./projects/opencv-angular-lib/assets/opencv.js",
              "./projects/opencv-angular-lib/assets/js/utils.js"
            ]`

