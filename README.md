# what's this?

We're demonstrating how we may use zeit on CodePen to do webpack builds. I've some use-cases
are listed [here](https://www.notion.so/codepen/now-example-bf22acf416f34196b10366b80a47349c)

# TO BUILD

```
docker build -t zeit_example  .
```

# TO RUN

```
docker run --name zeit_example -d -p 4567:8080 zeit_example
curl -d '' localhost:8080/webpack
```

# TO RUN ON ZEIT

```
now
curl -d '' <zeit_url>/webpack
```
