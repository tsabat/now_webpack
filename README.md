# what's this?

We're demonstrating how we may use zeit on CodePen to do webpack builds.

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
