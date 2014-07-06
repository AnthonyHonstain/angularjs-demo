angularjs-demo
===================

Java and AngularJS


#### Helpful Links
* http://perspilling.heroku.com/blog/2013/08/21/getting-started-with-angularjs-jetty-and-dropwizard/
 * This was the tutorial that got me pointed in this direction.
* http://www.dev-smart.com/archives/436 and http://www.jamesward.com/2011/08/23/war-less-java-web-apps
 * Working with Jetty and getting the app going.

#### Build
```
mvn clean
mvn compile
mvn compile exec:java
```

```
[INFO] Scanning for projects...
[INFO]
[INFO] ------------------------------------------------------------------------
[INFO] Building angular-demo 1.0-SNAPSHOT
[INFO] ------------------------------------------------------------------------
[INFO]
[INFO] --- maven-resources-plugin:2.3:resources (default-resources) @ angular-demo ---
[INFO] Using 'UTF-8' encoding to copy filtered resources.
[INFO] Copying 0 resource
[INFO]
[INFO] --- maven-compiler-plugin:2.3.2:compile (default-compile) @ angular-demo ---
[INFO] Compiling 2 source files to /home/rcstats/IdeaProjects/angular-demo/target/classes
[INFO]
[INFO] >>> exec-maven-plugin:1.2:java (default-cli) @ angular-demo >>>
[INFO]
[INFO] <<< exec-maven-plugin:1.2:java (default-cli) @ angular-demo <<<
[INFO]
[INFO] --- exec-maven-plugin:1.2:java (default-cli) @ angular-demo ---
2014-06-26 15:53:14.877:INFO:oejs.Server:jetty-7.5.1.v20110908
2014-06-26 15:53:15.121:INFO:oejsh.ContextHandler:started o.e.j.w.WebAppContext{/,file:/home/rcstats/IdeaProjects/angular-demo/src/main/webapp/}
2014-06-26 15:53:15.224:INFO:oejs.AbstractConnector:Started SelectChannelConnector@0.0.0.0:8080 STARTING
```

Running javascript
```
mvn jshint:lint
```

#### Result:
* http://127.0.0.1:8080
