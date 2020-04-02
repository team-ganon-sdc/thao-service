# Express CRUD API

> This server have four basic API: Get, Post, Put, and Delete. 

## Table of Contents

1. [Schema](#Schema)
1. [Get](#Get)
1. [Post](#Post)
1. [Put](#Put)
1. [Delete](#Delete)

## Schema
```sh
{
  id : {type: Number, unique: true},
  name : String,
  author : String,
  imageUrl : String,
  category : String,
  updatedAt : String,
  size : String,
  editorChoice : Boolean,
  rating: Number,
  ratings: Number,
  currentVersion: Number,
  installs : Number
}
```
## Get
'/apps/:appid'
Returns entire object data with the requested id.

## Post
'/apps'
Create a new entity within the database with the provided JSON body.

## Update
'/apps'
Note: An id must be included in the request body.
Query database with provided id and update with properties provided in body.

## Delete
'/apps/:appid'
Delete an entity with the matching id provided. 
