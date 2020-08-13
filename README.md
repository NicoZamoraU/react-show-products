# **App To Show Products**

## Preparing Environment

```
You need MySQL service running on port 3306

NPM or YARN installed globaly (I prefer YARN)

```

## Install node_modules
`yarn install`

## RUNNING Proyect

### **Setting variables**

```
For default when you start server, it will be create a DataBase called SHOP
and table called PRODUCTOS

if you want change this names you need create .env file on root dir
```

#### .ENV content

```
PORT=3002
DATA_BASE_NAME='prefered_name'
TABLE_NAME='prefered_name'
```


### Starting Server & React Page

> Need two terminals to run this project

#### First Terminal
`yarn serve` (Starting server on port 3002)

#### Second Terminal
`yarn start` (Starting webpack to compile App, on port 9000)


## Finnally

Go to -> **http://localhost:9000**