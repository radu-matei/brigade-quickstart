# Getting started with Brigade

Following the [quickstart][quickstart], we deploy Brigade on our cluster using
Helm 3:

```
$ helm version
version.BuildInfo{Version:"v3.2.4", GitCommit:"0ad800ef43d3b826f31a5ad8dfbb4fe05d143688", GitTreeState:"clean", GoVersion:"go1.13.12"}

$ helm repo add brigade https://brigadecore.github.io/charts
$ kubectl create ns brigade
$ kubectl config set-context --current --namespace=brigade
$ helm install brigade --namespace brigade brigade/brigade

$ kubectl get all
NAME                                        READY   STATUS              RESTARTS   AGE
pod/brigade-brigade-api-77d8c6cd59-qknvv    0/1     ContainerCreating   0          14s
pod/brigade-brigade-ctrl-5885799bcd-b5zv9   1/1     Running             0          14s
pod/brigade-kashti-649bfb6bbd-rfs2m         0/1     Running             0          14s

NAME                          TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)    AGE
service/brigade-brigade-api   ClusterIP   10.97.118.14     <none>        7745/TCP   14s
service/brigade-kashti        ClusterIP   10.109.154.219   <none>        80/TCP     14s

NAME                                   READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/brigade-brigade-api    0/1     1            0           14s
deployment.apps/brigade-brigade-ctrl   1/1     1            1           14s
deployment.apps/brigade-kashti         0/1     1            0           14s

NAME                                              DESIRED   CURRENT   READY   AGE
replicaset.apps/brigade-brigade-api-77d8c6cd59    1         1         0       14s
replicaset.apps/brigade-brigade-ctrl-5885799bcd   1         1         1       14s
replicaset.apps/brigade-kashti-649bfb6bbd         1         1         0       14s

NAME                                   SCHEDULE   SUSPEND   ACTIVE   LAST SCHEDULE   AGE
cronjob.batch/brigade-brigade-vacuum   @hourly    False     0        <none>          14s
```

We can see that by default, Brigade is really lightweight:

- a Kubernetes controller, which looks for Brigade events
- an API which we use to interact with Brigade
- an optional web dashboard

Additionally, we can configure components called gateways, which are used to map
outside events into Brigade. Brigade comes with a few pre-configured gateways:

- a generic web gateway for webhooks, which can be used with CloudEvents or any
  other valid JSON
- GitHub integration, with support for the new Checks API
- support for container registries, other git platforms (GitLab, BitBucket,
  Azure DevOps), cron jobs, Azure EventGrid, Trello, Kubernetes events, Kafka,
  and others

- using the Brigade API, it is easy to build custom gateways to connect to
  internal / external systems

[quickstart]: https://docs.brigade.sh/intro/quickstart/
