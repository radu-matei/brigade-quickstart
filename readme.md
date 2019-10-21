# Getting started with Brigade

### Using Kind (Kubernetes in Docker)

```
$ kind version
v0.5.1

$ kind create cluster
Creating cluster "kind" ...
✓ Ensuring node image (kindest/node:v1.15.3)
✓ Preparing nodes 📦
✓ Creating kubeadm config
✓ Starting control-plane 🕹️
✓ Installing CNI 🔌
✓ Installing StorageClass 💾
Cluster creation complete.
```

Following the [quickstart][quickstart], we deploy Brigade on our newly created cluster using Helm 3:

```
$ helm version
version.BuildInfo{Version:"v3.0.0-beta.4"}

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

[quickstart]: https://docs.brigade.sh/intro/quickstart/
