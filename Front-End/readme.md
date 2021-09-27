# React Workflow Cheatsheet

```
I'm assuming you've cloned the project and made your branch, 
and you've installed node.js
```

## 1. First install the react-script

open the terminal/cmd and write the following command

```
npm install react-scripts
```

## 2. open the project

open the directory(folder) in which your code is stored

1. you can go to the folder in file explorer 
2. right click or shift + right-click
3. choose the option open in terminal/command prompt/powershell

or you can just cd into that folder

## 3. open live server

you can edit the code but if you wish to see the changes as you make them
run the code - 

```
npm start
```

this will start a live server in your local network, which will open in your browser

> note that the server will close when you close the terminal or terminate the process with ctrl+c in case of terminals and powershell

in case it doesn't open, 
go to your browser and search 

```
localhost:3000
```

> your local host address can be different, look it up in the terminal

## 4. Responsive view

if you want to view your site in a vertical screen like you mobile

just open your browser in your device say your mobile, and search 


```
(your-ip-address):3000
```
> to get your ip address run ipconfig command in terminal

## 5. working in react

you're mostly going to work in src file, that's the source code,
i'm not writing how to edit the source code now, will add that part in future

## 6. build your project

the files you work on are react source code, building your project will convert your source code into html, css and javascript code, inside the build folder

to build the project write the command

```
npm build
```

> notice now there's a build file in your app folder

## 7. running the build code

in order to run the build just write the command

```
npx serve
```

in case this readme doesn't help do refer to this <a href='https://www.freecodecamp.org/news/how-to-build-a-react-project-with-create-react-app-in-10-steps/'>link</a>
