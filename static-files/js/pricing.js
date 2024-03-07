const apiResponse = [
  {
    apiVersion: "ngpc.rxt.io/v1",
    kind: "ServerClass",
    metadata: {
      annotations: {
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"ngpc.rxt.io/v1","kind":"ServerClass","metadata":{"annotations":{},"name":"ch.vs1.xlarge-dfw"},"spec":{"category":"Compute Heavy","displayName":"Compute Virtual Server.Extra Large","flavorType":"virtual","onDemandPricing":{"cost":"0.07","interval":"1h"},"provider":{"providerFlavorID":"compute1-15","providerType":"ospc"},"region":"us-central-dfw-1","resources":{"cpu":"8","memory":"15GB"}}}\n',
      },
      creationTimestamp: "2023-11-14T00:06:24Z",
      generation: 1,
      labels: {
        "region.ngpc.rxt.io/us-central-dfw-1": "",
      },
      managedFields: [
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:annotations": {
                ".": {},
                "f:kubectl.kubernetes.io/last-applied-configuration": {},
              },
            },
            "f:spec": {
              ".": {},
              "f:category": {},
              "f:displayName": {},
              "f:flavorType": {},
              "f:onDemandPricing": {
                ".": {},
                "f:cost": {},
                "f:interval": {},
              },
              "f:provider": {
                ".": {},
                "f:providerFlavorID": {},
                "f:providerType": {},
              },
              "f:region": {},
              "f:resources": {
                ".": {},
                "f:cpu": {},
                "f:memory": {},
              },
            },
          },
          manager: "kubectl-client-side-apply",
          operation: "Update",
          time: "2023-11-14T00:06:24Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:labels": {
                ".": {},
                "f:region.ngpc.rxt.io/us-central-dfw-1": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          time: "2023-11-14T00:06:24Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:status": {
              ".": {},
              "f:available": {},
              "f:capacity": {},
              "f:lastAuction": {},
              "f:reserved": {},
              "f:spotPricing": {
                ".": {},
                "f:hammerPricePerHour": {},
                "f:marketPricePerHour": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          subresource: "status",
          time: "2024-02-22T09:03:58Z",
        },
      ],
      name: "ch.vs1.xlarge-dfw",
      resourceVersion: "3101670",
      uid: "320607c6-4ca1-45fb-899f-4daf770de321",
    },
    spec: {
      availability: "available",
      category: "Compute Heavy",
      displayName: "Compute Virtual Server.Extra Large",
      flavorType: "virtual",
      onDemandPricing: {
        cost: "0.07",
        interval: "1h",
      },
      provider: {
        providerFlavorID: "compute1-15",
        providerType: "ospc",
      },
      region: "us-central-dfw-1",
      resources: {
        cpu: "8",
        memory: "15GB",
      },
    },
    status: {
      available: 0,
      capacity: 0,
      lastAuction: 415,
      reserved: 0,
      spotPricing: {
        hammerPricePerHour: "0.001000",
        marketPricePerHour: "0.001000",
      },
    },
  },
  {
    apiVersion: "ngpc.rxt.io/v1",
    kind: "ServerClass",
    metadata: {
      annotations: {
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"ngpc.rxt.io/v1","kind":"ServerClass","metadata":{"annotations":{},"name":"mh.vs1.xlarge-dfw"},"spec":{"category":"Memory Heavy","displayName":"Memory Virtual Server.Extra Large","flavorType":"virtual","onDemandPricing":{"cost":"0.13","interval":"1h"},"provider":{"providerFlavorID":"memory1-60","providerType":"ospc"},"region":"us-central-dfw-1","resources":{"cpu":"8","memory":"60GB"}}}\n',
      },
      creationTimestamp: "2023-11-14T00:06:27Z",
      generation: 1,
      labels: {
        "region.ngpc.rxt.io/us-central-dfw-1": "",
      },
      managedFields: [
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:annotations": {
                ".": {},
                "f:kubectl.kubernetes.io/last-applied-configuration": {},
              },
            },
            "f:spec": {
              ".": {},
              "f:category": {},
              "f:displayName": {},
              "f:flavorType": {},
              "f:onDemandPricing": {
                ".": {},
                "f:cost": {},
                "f:interval": {},
              },
              "f:provider": {
                ".": {},
                "f:providerFlavorID": {},
                "f:providerType": {},
              },
              "f:region": {},
              "f:resources": {
                ".": {},
                "f:cpu": {},
                "f:memory": {},
              },
            },
          },
          manager: "kubectl-client-side-apply",
          operation: "Update",
          time: "2023-11-14T00:06:27Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:labels": {
                ".": {},
                "f:region.ngpc.rxt.io/us-central-dfw-1": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          time: "2023-11-14T00:06:27Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:status": {
              ".": {},
              "f:available": {},
              "f:capacity": {},
              "f:lastAuction": {},
              "f:reserved": {},
              "f:spotPricing": {
                ".": {},
                "f:hammerPricePerHour": {},
                "f:marketPricePerHour": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          subresource: "status",
          time: "2024-02-22T09:03:57Z",
        },
      ],
      name: "mh.vs1.xlarge-dfw",
      resourceVersion: "3101672",
      uid: "115c0867-b09f-463f-b617-75b16b6395db",
    },
    spec: {
      availability: "available",
      category: "Memory Heavy",
      displayName: "Memory Virtual Server.Extra Large",
      flavorType: "virtual",
      onDemandPricing: {
        cost: "0.13",
        interval: "1h",
      },
      provider: {
        providerFlavorID: "memory1-60",
        providerType: "ospc",
      },
      region: "us-central-dfw-1",
      resources: {
        cpu: "8",
        memory: "60GB",
      },
    },
    status: {
      available: 0,
      capacity: 0,
      lastAuction: 424,
      reserved: 0,
      spotPricing: {
        hammerPricePerHour: "0.001000",
        marketPricePerHour: "0.001000",
      },
    },
  },
  {
    apiVersion: "ngpc.rxt.io/v1",
    kind: "ServerClass",
    metadata: {
      annotations: {
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"ngpc.rxt.io/v1","kind":"ServerClass","metadata":{"annotations":{},"name":"mh.vs1.2xlarge-dfw"},"spec":{"category":"Memory Heavy","displayName":"Memory Virtual Server.Double Extra Large","flavorType":"virtual","onDemandPricing":{"cost":"0.27","interval":"1h"},"provider":{"providerFlavorID":"memory1-120","providerType":"ospc"},"region":"us-central-dfw-1","resources":{"cpu":"16","memory":"120GB"}}}\n',
      },
      creationTimestamp: "2023-11-14T00:06:26Z",
      generation: 1,
      labels: {
        "region.ngpc.rxt.io/us-central-dfw-1": "",
      },
      managedFields: [
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:annotations": {
                ".": {},
                "f:kubectl.kubernetes.io/last-applied-configuration": {},
              },
            },
            "f:spec": {
              ".": {},
              "f:category": {},
              "f:displayName": {},
              "f:flavorType": {},
              "f:onDemandPricing": {
                ".": {},
                "f:cost": {},
                "f:interval": {},
              },
              "f:provider": {
                ".": {},
                "f:providerFlavorID": {},
                "f:providerType": {},
              },
              "f:region": {},
              "f:resources": {
                ".": {},
                "f:cpu": {},
                "f:memory": {},
              },
            },
          },
          manager: "kubectl-client-side-apply",
          operation: "Update",
          time: "2023-11-14T00:06:26Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:labels": {
                ".": {},
                "f:region.ngpc.rxt.io/us-central-dfw-1": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          time: "2023-11-14T00:06:26Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:status": {
              ".": {},
              "f:available": {},
              "f:capacity": {},
              "f:lastAuction": {},
              "f:reserved": {},
              "f:spotPricing": {
                ".": {},
                "f:hammerPricePerHour": {},
                "f:marketPricePerHour": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          subresource: "status",
          time: "2024-02-22T09:03:56Z",
        },
      ],
      name: "mh.vs1.2xlarge-dfw",
      resourceVersion: "3101674",
      uid: "6e52d70a-bdc1-4e55-bbdd-eadf12abcadc",
    },
    spec: {
      availability: "available",
      category: "Memory Heavy",
      displayName: "Memory Virtual Server.Double Extra Large",
      flavorType: "virtual",
      onDemandPricing: {
        cost: "0.27",
        interval: "1h",
      },
      provider: {
        providerFlavorID: "memory1-120",
        providerType: "ospc",
      },
      region: "us-central-dfw-1",
      resources: {
        cpu: "16",
        memory: "120GB",
      },
    },
    status: {
      available: 0,
      capacity: 0,
      lastAuction: 421,
      reserved: 0,
      spotPricing: {
        hammerPricePerHour: "0.001000",
        marketPricePerHour: "0.002000",
      },
    },
  },
  {
    apiVersion: "ngpc.rxt.io/v1",
    kind: "ServerClass",
    metadata: {
      annotations: {
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"ngpc.rxt.io/v1","kind":"ServerClass","metadata":{"annotations":{},"name":"gp.vs1.xlarge-iad"},"spec":{"category":"General Purpose","displayName":"General Virtual Server.Extra Large","flavorType":"virtual","onDemandPricing":{"cost":"0.09","interval":"1h"},"provider":{"providerFlavorID":"io1-30","providerType":"ospc"},"region":"us-east-iad-1","resources":{"cpu":"8","memory":"30GB"}}}\n',
      },
      creationTimestamp: "2023-11-14T00:06:26Z",
      generation: 1,
      labels: {
        "region.ngpc.rxt.io/us-east-iad-1": "",
      },
      managedFields: [
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:annotations": {
                ".": {},
                "f:kubectl.kubernetes.io/last-applied-configuration": {},
              },
            },
            "f:spec": {
              ".": {},
              "f:category": {},
              "f:displayName": {},
              "f:flavorType": {},
              "f:onDemandPricing": {
                ".": {},
                "f:cost": {},
                "f:interval": {},
              },
              "f:provider": {
                ".": {},
                "f:providerFlavorID": {},
                "f:providerType": {},
              },
              "f:region": {},
              "f:resources": {
                ".": {},
                "f:cpu": {},
                "f:memory": {},
              },
            },
          },
          manager: "kubectl-client-side-apply",
          operation: "Update",
          time: "2023-11-14T00:06:26Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:labels": {
                ".": {},
                "f:region.ngpc.rxt.io/us-east-iad-1": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          time: "2023-11-14T00:06:26Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:status": {
              ".": {},
              "f:available": {},
              "f:capacity": {},
              "f:lastAuction": {},
              "f:reserved": {},
              "f:spotPricing": {
                ".": {},
                "f:hammerPricePerHour": {},
                "f:marketPricePerHour": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          subresource: "status",
          time: "2024-03-01T17:24:36Z",
        },
      ],
      name: "gp.vs1.xlarge-iad",
      resourceVersion: "3101676",
      uid: "e1e89855-4b7b-43e8-9be9-352ce2850e05",
    },
    spec: {
      availability: "available",
      category: "General Purpose",
      displayName: "General Virtual Server.Extra Large",
      flavorType: "virtual",
      onDemandPricing: {
        cost: "0.09",
        interval: "1h",
      },
      provider: {
        providerFlavorID: "io1-30",
        providerType: "ospc",
      },
      region: "us-east-iad-1",
      resources: {
        cpu: "8",
        memory: "30GB",
      },
    },
    status: {
      available: 0,
      capacity: 0,
      lastAuction: 476,
      reserved: 0,
      spotPricing: {
        hammerPricePerHour: "0.001000",
        marketPricePerHour: "0.001000",
      },
    },
  },
  {
    apiVersion: "ngpc.rxt.io/v1",
    kind: "ServerClass",
    metadata: {
      annotations: {
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"ngpc.rxt.io/v1","kind":"ServerClass","metadata":{"annotations":{},"name":"mh.vs1.2xlarge-iad"},"spec":{"category":"Memory Heavy","displayName":"Memory Virtual Server.Double Extra Large","flavorType":"virtual","onDemandPricing":{"cost":"0.27","interval":"1h"},"provider":{"providerFlavorID":"memory1-120","providerType":"ospc"},"region":"us-east-iad-1","resources":{"cpu":"16","memory":"120GB"}}}\n',
      },
      creationTimestamp: "2023-11-14T00:06:26Z",
      generation: 1,
      labels: {
        "region.ngpc.rxt.io/us-east-iad-1": "",
      },
      managedFields: [
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:annotations": {
                ".": {},
                "f:kubectl.kubernetes.io/last-applied-configuration": {},
              },
            },
            "f:spec": {
              ".": {},
              "f:category": {},
              "f:displayName": {},
              "f:flavorType": {},
              "f:onDemandPricing": {
                ".": {},
                "f:cost": {},
                "f:interval": {},
              },
              "f:provider": {
                ".": {},
                "f:providerFlavorID": {},
                "f:providerType": {},
              },
              "f:region": {},
              "f:resources": {
                ".": {},
                "f:cpu": {},
                "f:memory": {},
              },
            },
          },
          manager: "kubectl-client-side-apply",
          operation: "Update",
          time: "2023-11-14T00:06:26Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:labels": {
                ".": {},
                "f:region.ngpc.rxt.io/us-east-iad-1": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          time: "2023-11-14T00:06:26Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:status": {
              ".": {},
              "f:available": {},
              "f:capacity": {},
              "f:lastAuction": {},
              "f:reserved": {},
              "f:spotPricing": {
                ".": {},
                "f:hammerPricePerHour": {},
                "f:marketPricePerHour": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          subresource: "status",
          time: "2024-02-19T13:03:11Z",
        },
      ],
      name: "mh.vs1.2xlarge-iad",
      resourceVersion: "3101677",
      uid: "f2e8cfc0-6c82-476a-a68f-ad11683cd652",
    },
    spec: {
      availability: "available",
      category: "Memory Heavy",
      displayName: "Memory Virtual Server.Double Extra Large",
      flavorType: "virtual",
      onDemandPricing: {
        cost: "0.27",
        interval: "1h",
      },
      provider: {
        providerFlavorID: "memory1-120",
        providerType: "ospc",
      },
      region: "us-east-iad-1",
      resources: {
        cpu: "16",
        memory: "120GB",
      },
    },
    status: {
      available: 0,
      capacity: 0,
      lastAuction: 389,
      reserved: 0,
      spotPricing: {
        hammerPricePerHour: "0.001000",
        marketPricePerHour: "0.002000",
      },
    },
  },
  {
    apiVersion: "ngpc.rxt.io/v1",
    kind: "ServerClass",
    metadata: {
      annotations: {
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"ngpc.rxt.io/v1","kind":"ServerClass","metadata":{"annotations":{},"name":"mh.vs1.large-iad"},"spec":{"category":"Memory Heavy","displayName":"Memory Virtual Server.Large","flavorType":"virtual","onDemandPricing":{"cost":"0.07","interval":"1h"},"provider":{"providerFlavorID":"memory1-30","providerType":"ospc"},"region":"us-east-iad-1","resources":{"cpu":"4","memory":"30GB"}}}\n',
      },
      creationTimestamp: "2023-11-14T00:06:27Z",
      generation: 1,
      labels: {
        "region.ngpc.rxt.io/us-east-iad-1": "",
      },
      managedFields: [
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:annotations": {
                ".": {},
                "f:kubectl.kubernetes.io/last-applied-configuration": {},
              },
            },
            "f:spec": {
              ".": {},
              "f:category": {},
              "f:displayName": {},
              "f:flavorType": {},
              "f:onDemandPricing": {
                ".": {},
                "f:cost": {},
                "f:interval": {},
              },
              "f:provider": {
                ".": {},
                "f:providerFlavorID": {},
                "f:providerType": {},
              },
              "f:region": {},
              "f:resources": {
                ".": {},
                "f:cpu": {},
                "f:memory": {},
              },
            },
          },
          manager: "kubectl-client-side-apply",
          operation: "Update",
          time: "2023-11-14T00:06:27Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:labels": {
                ".": {},
                "f:region.ngpc.rxt.io/us-east-iad-1": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          time: "2023-11-14T00:06:27Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:status": {
              ".": {},
              "f:available": {},
              "f:capacity": {},
              "f:lastAuction": {},
              "f:reserved": {},
              "f:spotPricing": {
                ".": {},
                "f:hammerPricePerHour": {},
                "f:marketPricePerHour": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          subresource: "status",
          time: "2023-11-16T05:39:46Z",
        },
      ],
      name: "mh.vs1.large-iad",
      resourceVersion: "3101683",
      uid: "e522dacf-1730-4985-8938-3c566e1dcd5c",
    },
    spec: {
      availability: "available",
      category: "Memory Heavy",
      displayName: "Memory Virtual Server.Large",
      flavorType: "virtual",
      onDemandPricing: {
        cost: "0.07",
        interval: "1h",
      },
      provider: {
        providerFlavorID: "memory1-30",
        providerType: "ospc",
      },
      region: "us-east-iad-1",
      resources: {
        cpu: "4",
        memory: "30GB",
      },
    },
    status: {
      available: 0,
      capacity: 0,
      lastAuction: 18,
      reserved: 0,
      spotPricing: {
        hammerPricePerHour: "0.001000",
        marketPricePerHour: "0.001000",
      },
    },
  },
  {
    apiVersion: "ngpc.rxt.io/v1",
    kind: "ServerClass",
    metadata: {
      annotations: {
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"ngpc.rxt.io/v1","kind":"ServerClass","metadata":{"annotations":{},"name":"mh.vs1.xlarge-iad"},"spec":{"category":"Memory Heavy","displayName":"Memory Virtual Server.Extra Large","flavorType":"virtual","onDemandPricing":{"cost":"0.13","interval":"1h"},"provider":{"providerFlavorID":"memory1-60","providerType":"ospc"},"region":"us-east-iad-1","resources":{"cpu":"8","memory":"60GB"}}}\n',
      },
      creationTimestamp: "2023-11-14T00:06:27Z",
      generation: 1,
      labels: {
        "region.ngpc.rxt.io/us-east-iad-1": "",
      },
      managedFields: [
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:annotations": {
                ".": {},
                "f:kubectl.kubernetes.io/last-applied-configuration": {},
              },
            },
            "f:spec": {
              ".": {},
              "f:category": {},
              "f:displayName": {},
              "f:flavorType": {},
              "f:onDemandPricing": {
                ".": {},
                "f:cost": {},
                "f:interval": {},
              },
              "f:provider": {
                ".": {},
                "f:providerFlavorID": {},
                "f:providerType": {},
              },
              "f:region": {},
              "f:resources": {
                ".": {},
                "f:cpu": {},
                "f:memory": {},
              },
            },
          },
          manager: "kubectl-client-side-apply",
          operation: "Update",
          time: "2023-11-14T00:06:27Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:labels": {
                ".": {},
                "f:region.ngpc.rxt.io/us-east-iad-1": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          time: "2023-11-14T00:06:27Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:status": {
              ".": {},
              "f:available": {},
              "f:capacity": {},
              "f:lastAuction": {},
              "f:reserved": {},
              "f:spotPricing": {
                ".": {},
                "f:hammerPricePerHour": {},
                "f:marketPricePerHour": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          subresource: "status",
          time: "2023-11-14T18:45:55Z",
        },
      ],
      name: "mh.vs1.xlarge-iad",
      resourceVersion: "3101685",
      uid: "ba8f6f64-a46d-4a55-b18d-850e10d7b333",
    },
    spec: {
      availability: "available",
      category: "Memory Heavy",
      displayName: "Memory Virtual Server.Extra Large",
      flavorType: "virtual",
      onDemandPricing: {
        cost: "0.13",
        interval: "1h",
      },
      provider: {
        providerFlavorID: "memory1-60",
        providerType: "ospc",
      },
      region: "us-east-iad-1",
      resources: {
        cpu: "8",
        memory: "60GB",
      },
    },
    status: {
      available: 0,
      capacity: 0,
      lastAuction: 0,
      reserved: 0,
      spotPricing: {
        hammerPricePerHour: "0.001000",
        marketPricePerHour: "0.001000",
      },
    },
  },
  {
    apiVersion: "ngpc.rxt.io/v1",
    kind: "ServerClass",
    metadata: {
      annotations: {
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"ngpc.rxt.io/v1","kind":"ServerClass","metadata":{"annotations":{},"name":"ch.vs1.large-dfw"},"spec":{"category":"Compute Heavy","displayName":"Compute Virtual Server.Large","flavorType":"virtual","onDemandPricing":{"cost":"0.03","interval":"1h"},"provider":{"providerFlavorID":"compute1-8","providerType":"ospc"},"region":"us-central-dfw-1","resources":{"cpu":"4","memory":"7.5GB"}}}\n',
      },
      creationTimestamp: "2023-11-14T00:06:24Z",
      generation: 1,
      labels: {
        "region.ngpc.rxt.io/us-central-dfw-1": "",
      },
      managedFields: [
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:annotations": {
                ".": {},
                "f:kubectl.kubernetes.io/last-applied-configuration": {},
              },
            },
            "f:spec": {
              ".": {},
              "f:category": {},
              "f:displayName": {},
              "f:flavorType": {},
              "f:onDemandPricing": {
                ".": {},
                "f:cost": {},
                "f:interval": {},
              },
              "f:provider": {
                ".": {},
                "f:providerFlavorID": {},
                "f:providerType": {},
              },
              "f:region": {},
              "f:resources": {
                ".": {},
                "f:cpu": {},
                "f:memory": {},
              },
            },
          },
          manager: "kubectl-client-side-apply",
          operation: "Update",
          time: "2023-11-14T00:06:24Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:labels": {
                ".": {},
                "f:region.ngpc.rxt.io/us-central-dfw-1": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          time: "2023-11-14T00:06:24Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:status": {
              ".": {},
              "f:available": {},
              "f:capacity": {},
              "f:lastAuction": {},
              "f:reserved": {},
              "f:spotPricing": {
                ".": {},
                "f:hammerPricePerHour": {},
                "f:marketPricePerHour": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          subresource: "status",
          time: "2024-02-22T09:03:58Z",
        },
      ],
      name: "ch.vs1.large-dfw",
      resourceVersion: "3101687",
      uid: "7e9e7503-94c2-48ac-a2bd-0c51f2e3a0c9",
    },
    spec: {
      availability: "available",
      category: "Compute Heavy",
      displayName: "Compute Virtual Server.Large",
      flavorType: "virtual",
      onDemandPricing: {
        cost: "0.03",
        interval: "1h",
      },
      provider: {
        providerFlavorID: "compute1-8",
        providerType: "ospc",
      },
      region: "us-central-dfw-1",
      resources: {
        cpu: "4",
        memory: "7.5GB",
      },
    },
    status: {
      available: 0,
      capacity: 0,
      lastAuction: 413,
      reserved: 0,
      spotPricing: {
        hammerPricePerHour: "0.001000",
        marketPricePerHour: "0.001000",
      },
    },
  },
  {
    apiVersion: "ngpc.rxt.io/v1",
    kind: "ServerClass",
    metadata: {
      annotations: {
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"ngpc.rxt.io/v1","kind":"ServerClass","metadata":{"annotations":{},"name":"gp.vs1.2xlarge-iad"},"spec":{"category":"General Purpose","displayName":"General Virtual Server.Double Extra Large","flavorType":"virtual","onDemandPricing":{"cost":"0.18","interval":"1h"},"provider":{"providerFlavorID":"io1-60","providerType":"ospc"},"region":"us-east-iad-1","resources":{"cpu":"16","memory":"60GB"}}}\n',
      },
      creationTimestamp: "2023-11-14T00:06:25Z",
      generation: 1,
      labels: {
        "region.ngpc.rxt.io/us-east-iad-1": "",
      },
      managedFields: [
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:annotations": {
                ".": {},
                "f:kubectl.kubernetes.io/last-applied-configuration": {},
              },
            },
            "f:spec": {
              ".": {},
              "f:category": {},
              "f:displayName": {},
              "f:flavorType": {},
              "f:onDemandPricing": {
                ".": {},
                "f:cost": {},
                "f:interval": {},
              },
              "f:provider": {
                ".": {},
                "f:providerFlavorID": {},
                "f:providerType": {},
              },
              "f:region": {},
              "f:resources": {
                ".": {},
                "f:cpu": {},
                "f:memory": {},
              },
            },
          },
          manager: "kubectl-client-side-apply",
          operation: "Update",
          time: "2023-11-14T00:06:25Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:labels": {
                ".": {},
                "f:region.ngpc.rxt.io/us-east-iad-1": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          time: "2023-11-14T00:06:25Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:status": {
              ".": {},
              "f:available": {},
              "f:capacity": {},
              "f:lastAuction": {},
              "f:reserved": {},
              "f:spotPricing": {
                ".": {},
                "f:hammerPricePerHour": {},
                "f:marketPricePerHour": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          subresource: "status",
          time: "2024-02-29T14:21:21Z",
        },
      ],
      name: "gp.vs1.2xlarge-iad",
      resourceVersion: "3101688",
      uid: "79f4d17f-5f9b-4954-b361-f8471b4a1580",
    },
    spec: {
      availability: "available",
      category: "General Purpose",
      displayName: "General Virtual Server.Double Extra Large",
      flavorType: "virtual",
      onDemandPricing: {
        cost: "0.18",
        interval: "1h",
      },
      provider: {
        providerFlavorID: "io1-60",
        providerType: "ospc",
      },
      region: "us-east-iad-1",
      resources: {
        cpu: "16",
        memory: "60GB",
      },
    },
    status: {
      available: 0,
      capacity: 0,
      lastAuction: 468,
      reserved: 0,
      spotPricing: {
        hammerPricePerHour: "0.003000",
        marketPricePerHour: "0.004000",
      },
    },
  },
  {
    apiVersion: "ngpc.rxt.io/v1",
    kind: "ServerClass",
    metadata: {
      annotations: {
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"ngpc.rxt.io/v1","kind":"ServerClass","metadata":{"annotations":{},"name":"gp.vs1.xlarge-dfw"},"spec":{"category":"General Purpose","displayName":"General Virtual Server.Extra Large","flavorType":"virtual","onDemandPricing":{"cost":"0.09","interval":"1h"},"provider":{"providerFlavorID":"io1-30","providerType":"ospc"},"region":"us-central-dfw-1","resources":{"cpu":"8","memory":"30GB"}}}\n',
      },
      creationTimestamp: "2023-11-14T00:06:26Z",
      generation: 1,
      labels: {
        "region.ngpc.rxt.io/us-central-dfw-1": "",
      },
      managedFields: [
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:annotations": {
                ".": {},
                "f:kubectl.kubernetes.io/last-applied-configuration": {},
              },
            },
            "f:spec": {
              ".": {},
              "f:category": {},
              "f:displayName": {},
              "f:flavorType": {},
              "f:onDemandPricing": {
                ".": {},
                "f:cost": {},
                "f:interval": {},
              },
              "f:provider": {
                ".": {},
                "f:providerFlavorID": {},
                "f:providerType": {},
              },
              "f:region": {},
              "f:resources": {
                ".": {},
                "f:cpu": {},
                "f:memory": {},
              },
            },
          },
          manager: "kubectl-client-side-apply",
          operation: "Update",
          time: "2023-11-14T00:06:26Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:labels": {
                ".": {},
                "f:region.ngpc.rxt.io/us-central-dfw-1": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          time: "2023-11-14T00:06:26Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:status": {
              ".": {},
              "f:available": {},
              "f:capacity": {},
              "f:lastAuction": {},
              "f:reserved": {},
              "f:spotPricing": {
                ".": {},
                "f:hammerPricePerHour": {},
                "f:marketPricePerHour": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          subresource: "status",
          time: "2024-03-01T21:46:19Z",
        },
      ],
      name: "gp.vs1.xlarge-dfw",
      resourceVersion: "3101750",
      uid: "2fa3bd41-c58f-4e5a-8c6a-d6192c00801c",
    },
    spec: {
      availability: "available",
      category: "General Purpose",
      displayName: "General Virtual Server.Extra Large",
      flavorType: "virtual",
      onDemandPricing: {
        cost: "0.09",
        interval: "1h",
      },
      provider: {
        providerFlavorID: "io1-30",
        providerType: "ospc",
      },
      region: "us-central-dfw-1",
      resources: {
        cpu: "8",
        memory: "30GB",
      },
    },
    status: {
      available: 0,
      capacity: 0,
      lastAuction: 485,
      reserved: 0,
      spotPricing: {
        hammerPricePerHour: "0.001000",
        marketPricePerHour: "0.001000",
      },
    },
  },
  {
    apiVersion: "ngpc.rxt.io/v1",
    kind: "ServerClass",
    metadata: {
      annotations: {
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"ngpc.rxt.io/v1","kind":"ServerClass","metadata":{"annotations":{},"name":"gp.vs1.small-dfw"},"spec":{"category":"General Purpose","displayName":"General Virtual Server.Small","flavorType":"virtual","onDemandPricing":{"cost":"0.01","interval":"1h"},"provider":{"providerFlavorID":"general1-1","providerType":"ospc"},"region":"us-central-dfw-1","resources":{"cpu":"1","memory":"1GB"}}}\n',
      },
      creationTimestamp: "2023-11-14T00:06:25Z",
      generation: 2,
      labels: {
        "region.ngpc.rxt.io/us-central-dfw-1": "",
      },
      managedFields: [
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:annotations": {
                ".": {},
                "f:kubectl.kubernetes.io/last-applied-configuration": {},
              },
            },
            "f:spec": {
              ".": {},
              "f:category": {},
              "f:displayName": {},
              "f:flavorType": {},
              "f:onDemandPricing": {
                ".": {},
                "f:cost": {},
                "f:interval": {},
              },
              "f:provider": {
                ".": {},
                "f:providerFlavorID": {},
                "f:providerType": {},
              },
              "f:region": {},
              "f:resources": {
                ".": {},
                "f:cpu": {},
                "f:memory": {},
              },
            },
          },
          manager: "kubectl-client-side-apply",
          operation: "Update",
          time: "2023-11-14T00:06:25Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:labels": {
                ".": {},
                "f:region.ngpc.rxt.io/us-central-dfw-1": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          time: "2023-11-14T00:06:26Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:status": {
              ".": {},
              "f:available": {},
              "f:capacity": {},
              "f:lastAuction": {},
              "f:reserved": {},
              "f:spotPricing": {
                ".": {},
                "f:hammerPricePerHour": {},
                "f:marketPricePerHour": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          subresource: "status",
          time: "2024-02-22T09:03:56Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:spec": {
              "f:availability": {},
            },
          },
          manager: "kubectl-edit",
          operation: "Update",
          time: "2024-03-01T22:06:26Z",
        },
      ],
      name: "gp.vs1.small-dfw",
      resourceVersion: "3102256",
      uid: "9012daa2-c767-4cb6-bdca-7cb76bfdff1e",
    },
    spec: {
      availability: "deprecated",
      category: "General Purpose",
      displayName: "General Virtual Server.Small",
      flavorType: "virtual",
      onDemandPricing: {
        cost: "0.01",
        interval: "1h",
      },
      provider: {
        providerFlavorID: "general1-1",
        providerType: "ospc",
      },
      region: "us-central-dfw-1",
      resources: {
        cpu: "1",
        memory: "1GB",
      },
    },
    status: {
      available: 0,
      capacity: 0,
      lastAuction: 419,
      reserved: 0,
      spotPricing: {
        hammerPricePerHour: "0.002000",
        marketPricePerHour: "3.002000",
      },
    },
  },
  {
    apiVersion: "ngpc.rxt.io/v1",
    kind: "ServerClass",
    metadata: {
      annotations: {
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"ngpc.rxt.io/v1","kind":"ServerClass","metadata":{"annotations":{},"name":"gp.vs1.small-iad"},"spec":{"category":"General Purpose","displayName":"General Virtual Server.Small","flavorType":"virtual","onDemandPricing":{"cost":"0.01","interval":"1h"},"provider":{"providerFlavorID":"general1-1","providerType":"ospc"},"region":"us-east-iad-1","resources":{"cpu":"1","memory":"1GB"}}}\n',
      },
      creationTimestamp: "2023-11-14T00:06:26Z",
      generation: 2,
      labels: {
        "region.ngpc.rxt.io/us-east-iad-1": "",
      },
      managedFields: [
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:annotations": {
                ".": {},
                "f:kubectl.kubernetes.io/last-applied-configuration": {},
              },
            },
            "f:spec": {
              ".": {},
              "f:category": {},
              "f:displayName": {},
              "f:flavorType": {},
              "f:onDemandPricing": {
                ".": {},
                "f:cost": {},
                "f:interval": {},
              },
              "f:provider": {
                ".": {},
                "f:providerFlavorID": {},
                "f:providerType": {},
              },
              "f:region": {},
              "f:resources": {
                ".": {},
                "f:cpu": {},
                "f:memory": {},
              },
            },
          },
          manager: "kubectl-client-side-apply",
          operation: "Update",
          time: "2023-11-14T00:06:26Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:labels": {
                ".": {},
                "f:region.ngpc.rxt.io/us-east-iad-1": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          time: "2023-11-14T00:06:26Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:status": {
              ".": {},
              "f:available": {},
              "f:capacity": {},
              "f:lastAuction": {},
              "f:reserved": {},
              "f:spotPricing": {
                ".": {},
                "f:hammerPricePerHour": {},
                "f:marketPricePerHour": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          subresource: "status",
          time: "2024-02-22T20:18:06Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:spec": {
              "f:availability": {},
            },
          },
          manager: "kubectl-edit",
          operation: "Update",
          time: "2024-03-01T22:06:26Z",
        },
      ],
      name: "gp.vs1.small-iad",
      resourceVersion: "3102257",
      uid: "d8ab5bd0-4577-465f-b5cf-517a85903420",
    },
    spec: {
      availability: "deprecated",
      category: "General Purpose",
      displayName: "General Virtual Server.Small",
      flavorType: "virtual",
      onDemandPricing: {
        cost: "0.01",
        interval: "1h",
      },
      provider: {
        providerFlavorID: "general1-1",
        providerType: "ospc",
      },
      region: "us-east-iad-1",
      resources: {
        cpu: "1",
        memory: "1GB",
      },
    },
    status: {
      available: 0,
      capacity: 0,
      lastAuction: 430,
      reserved: 0,
      spotPricing: {
        hammerPricePerHour: "0.002000",
        marketPricePerHour: "10.001000",
      },
    },
  },
  {
    apiVersion: "ngpc.rxt.io/v1",
    kind: "ServerClass",
    metadata: {
      annotations: {
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"ngpc.rxt.io/v1","kind":"ServerClass","metadata":{"annotations":{},"name":"gp.vs1.large-ord"},"spec":{"category":"General Purpose","displayName":"General Virtual Server.Large","flavorType":"virtual","onDemandPricing":{"cost":"0.04","interval":"1h"},"provider":{"providerFlavorID":"io1-15","providerType":"ospc"},"region":"us-central-ord-1","resources":{"cpu":"4","memory":"15GB"}}}\n',
      },
      creationTimestamp: "2024-03-02T02:39:10Z",
      generation: 1,
      labels: {
        "region.ngpc.rxt.io/us-central-ord-1": "",
      },
      managedFields: [
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:annotations": {
                ".": {},
                "f:kubectl.kubernetes.io/last-applied-configuration": {},
              },
            },
            "f:spec": {
              ".": {},
              "f:availability": {},
              "f:category": {},
              "f:displayName": {},
              "f:flavorType": {},
              "f:onDemandPricing": {
                ".": {},
                "f:cost": {},
                "f:interval": {},
              },
              "f:provider": {
                ".": {},
                "f:providerFlavorID": {},
                "f:providerType": {},
              },
              "f:region": {},
              "f:resources": {
                ".": {},
                "f:cpu": {},
                "f:memory": {},
              },
            },
          },
          manager: "kubectl-client-side-apply",
          operation: "Update",
          time: "2024-03-02T02:39:10Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:labels": {
                ".": {},
                "f:region.ngpc.rxt.io/us-central-ord-1": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          time: "2024-03-02T02:39:11Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:status": {
              ".": {},
              "f:available": {},
              "f:capacity": {},
              "f:lastAuction": {},
              "f:reserved": {},
              "f:spotPricing": {
                ".": {},
                "f:hammerPricePerHour": {},
                "f:marketPricePerHour": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          subresource: "status",
          time: "2024-03-02T03:07:04Z",
        },
      ],
      name: "gp.vs1.large-ord",
      resourceVersion: "3105519",
      uid: "42dced3f-af40-40e0-af00-921bdb77287a",
    },
    spec: {
      availability: "available",
      category: "General Purpose",
      displayName: "General Virtual Server.Large",
      flavorType: "virtual",
      onDemandPricing: {
        cost: "0.04",
        interval: "1h",
      },
      provider: {
        providerFlavorID: "io1-15",
        providerType: "ospc",
      },
      region: "us-central-ord-1",
      resources: {
        cpu: "4",
        memory: "15GB",
      },
    },
    status: {
      available: 0,
      capacity: 0,
      lastAuction: 0,
      reserved: 0,
      spotPricing: {
        hammerPricePerHour: "0.001000",
        marketPricePerHour: "0.001000",
      },
    },
  },
  {
    apiVersion: "ngpc.rxt.io/v1",
    kind: "ServerClass",
    metadata: {
      annotations: {
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"ngpc.rxt.io/v1","kind":"ServerClass","metadata":{"annotations":{},"name":"gp.vs1.medium-ord"},"spec":{"category":"General Purpose","displayName":"General Virtual Server.Medium","flavorType":"virtual","onDemandPricing":{"cost":"0.02","interval":"1h"},"provider":{"providerFlavorID":"compute1-4","providerType":"ospc"},"region":"us-central-ord-1","resources":{"cpu":"2","memory":"3.75GB"}}}\n',
      },
      creationTimestamp: "2024-03-02T02:39:11Z",
      generation: 1,
      labels: {
        "region.ngpc.rxt.io/us-central-ord-1": "",
      },
      managedFields: [
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:annotations": {
                ".": {},
                "f:kubectl.kubernetes.io/last-applied-configuration": {},
              },
            },
            "f:spec": {
              ".": {},
              "f:availability": {},
              "f:category": {},
              "f:displayName": {},
              "f:flavorType": {},
              "f:onDemandPricing": {
                ".": {},
                "f:cost": {},
                "f:interval": {},
              },
              "f:provider": {
                ".": {},
                "f:providerFlavorID": {},
                "f:providerType": {},
              },
              "f:region": {},
              "f:resources": {
                ".": {},
                "f:cpu": {},
                "f:memory": {},
              },
            },
          },
          manager: "kubectl-client-side-apply",
          operation: "Update",
          time: "2024-03-02T02:39:11Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:labels": {
                ".": {},
                "f:region.ngpc.rxt.io/us-central-ord-1": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          time: "2024-03-02T02:39:11Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:status": {
              ".": {},
              "f:available": {},
              "f:capacity": {},
              "f:lastAuction": {},
              "f:reserved": {},
              "f:spotPricing": {
                ".": {},
                "f:hammerPricePerHour": {},
                "f:marketPricePerHour": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          subresource: "status",
          time: "2024-03-02T03:07:04Z",
        },
      ],
      name: "gp.vs1.medium-ord",
      resourceVersion: "3105520",
      uid: "ff904cee-847d-4e3f-b25b-cb7640dbe403",
    },
    spec: {
      availability: "available",
      category: "General Purpose",
      displayName: "General Virtual Server.Medium",
      flavorType: "virtual",
      onDemandPricing: {
        cost: "0.02",
        interval: "1h",
      },
      provider: {
        providerFlavorID: "compute1-4",
        providerType: "ospc",
      },
      region: "us-central-ord-1",
      resources: {
        cpu: "2",
        memory: "3.75GB",
      },
    },
    status: {
      available: 0,
      capacity: 0,
      lastAuction: 0,
      reserved: 0,
      spotPricing: {
        hammerPricePerHour: "0.001000",
        marketPricePerHour: "0.001000",
      },
    },
  },
  {
    apiVersion: "ngpc.rxt.io/v1",
    kind: "ServerClass",
    metadata: {
      annotations: {
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"ngpc.rxt.io/v1","kind":"ServerClass","metadata":{"annotations":{},"name":"ch.vs1.medium-ord"},"spec":{"category":"Compute Heavy","displayName":"Compute Virtual Server.Medium","flavorType":"virtual","onDemandPricing":{"cost":"0.02","interval":"1h"},"provider":{"providerFlavorID":"compute1-4","providerType":"ospc"},"region":"us-central-ord-1","resources":{"cpu":"2","memory":"3.75GB"}}}\n',
      },
      creationTimestamp: "2024-03-02T02:39:09Z",
      generation: 1,
      labels: {
        "region.ngpc.rxt.io/us-central-ord-1": "",
      },
      managedFields: [
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:annotations": {
                ".": {},
                "f:kubectl.kubernetes.io/last-applied-configuration": {},
              },
            },
            "f:spec": {
              ".": {},
              "f:availability": {},
              "f:category": {},
              "f:displayName": {},
              "f:flavorType": {},
              "f:onDemandPricing": {
                ".": {},
                "f:cost": {},
                "f:interval": {},
              },
              "f:provider": {
                ".": {},
                "f:providerFlavorID": {},
                "f:providerType": {},
              },
              "f:region": {},
              "f:resources": {
                ".": {},
                "f:cpu": {},
                "f:memory": {},
              },
            },
          },
          manager: "kubectl-client-side-apply",
          operation: "Update",
          time: "2024-03-02T02:39:09Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:labels": {
                ".": {},
                "f:region.ngpc.rxt.io/us-central-ord-1": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          time: "2024-03-02T02:39:09Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:status": {
              ".": {},
              "f:available": {},
              "f:capacity": {},
              "f:lastAuction": {},
              "f:reserved": {},
              "f:spotPricing": {
                ".": {},
                "f:hammerPricePerHour": {},
                "f:marketPricePerHour": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          subresource: "status",
          time: "2024-03-02T03:07:06Z",
        },
      ],
      name: "ch.vs1.medium-ord",
      resourceVersion: "3105521",
      uid: "b87b2338-28cd-447b-8f82-c0860be2e099",
    },
    spec: {
      availability: "available",
      category: "Compute Heavy",
      displayName: "Compute Virtual Server.Medium",
      flavorType: "virtual",
      onDemandPricing: {
        cost: "0.02",
        interval: "1h",
      },
      provider: {
        providerFlavorID: "compute1-4",
        providerType: "ospc",
      },
      region: "us-central-ord-1",
      resources: {
        cpu: "2",
        memory: "3.75GB",
      },
    },
    status: {
      available: 0,
      capacity: 0,
      lastAuction: 0,
      reserved: 0,
      spotPricing: {
        hammerPricePerHour: "0.001000",
        marketPricePerHour: "0.001000",
      },
    },
  },
  {
    apiVersion: "ngpc.rxt.io/v1",
    kind: "ServerClass",
    metadata: {
      annotations: {
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"ngpc.rxt.io/v1","kind":"ServerClass","metadata":{"annotations":{},"name":"gp.vs1.xlarge-ord"},"spec":{"category":"General Purpose","displayName":"General Virtual Server.Extra Large","flavorType":"virtual","onDemandPricing":{"cost":"0.09","interval":"1h"},"provider":{"providerFlavorID":"io1-30","providerType":"ospc"},"region":"us-central-ord-1","resources":{"cpu":"8","memory":"30GB"}}}\n',
      },
      creationTimestamp: "2024-03-02T02:39:11Z",
      generation: 1,
      labels: {
        "region.ngpc.rxt.io/us-central-ord-1": "",
      },
      managedFields: [
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:annotations": {
                ".": {},
                "f:kubectl.kubernetes.io/last-applied-configuration": {},
              },
            },
            "f:spec": {
              ".": {},
              "f:availability": {},
              "f:category": {},
              "f:displayName": {},
              "f:flavorType": {},
              "f:onDemandPricing": {
                ".": {},
                "f:cost": {},
                "f:interval": {},
              },
              "f:provider": {
                ".": {},
                "f:providerFlavorID": {},
                "f:providerType": {},
              },
              "f:region": {},
              "f:resources": {
                ".": {},
                "f:cpu": {},
                "f:memory": {},
              },
            },
          },
          manager: "kubectl-client-side-apply",
          operation: "Update",
          time: "2024-03-02T02:39:11Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:labels": {
                ".": {},
                "f:region.ngpc.rxt.io/us-central-ord-1": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          time: "2024-03-02T02:39:12Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:status": {
              ".": {},
              "f:available": {},
              "f:capacity": {},
              "f:lastAuction": {},
              "f:reserved": {},
              "f:spotPricing": {
                ".": {},
                "f:hammerPricePerHour": {},
                "f:marketPricePerHour": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          subresource: "status",
          time: "2024-03-02T03:07:07Z",
        },
      ],
      name: "gp.vs1.xlarge-ord",
      resourceVersion: "3105522",
      uid: "4e84811d-e35e-4ae3-b31a-064fb8a6450e",
    },
    spec: {
      availability: "available",
      category: "General Purpose",
      displayName: "General Virtual Server.Extra Large",
      flavorType: "virtual",
      onDemandPricing: {
        cost: "0.09",
        interval: "1h",
      },
      provider: {
        providerFlavorID: "io1-30",
        providerType: "ospc",
      },
      region: "us-central-ord-1",
      resources: {
        cpu: "8",
        memory: "30GB",
      },
    },
    status: {
      available: 0,
      capacity: 0,
      lastAuction: 0,
      reserved: 0,
      spotPricing: {
        hammerPricePerHour: "0.001000",
        marketPricePerHour: "0.001000",
      },
    },
  },
  {
    apiVersion: "ngpc.rxt.io/v1",
    kind: "ServerClass",
    metadata: {
      annotations: {
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"ngpc.rxt.io/v1","kind":"ServerClass","metadata":{"annotations":{},"name":"mh.vs1.large-ord"},"spec":{"category":"Memory Heavy","displayName":"Memory Virtual Server.Large","flavorType":"virtual","onDemandPricing":{"cost":"0.07","interval":"1h"},"provider":{"providerFlavorID":"memory1-30","providerType":"ospc"},"region":"us-central-ord-1","resources":{"cpu":"4","memory":"30GB"}}}\n',
      },
      creationTimestamp: "2024-03-02T02:39:11Z",
      generation: 1,
      labels: {
        "region.ngpc.rxt.io/us-central-ord-1": "",
      },
      managedFields: [
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:annotations": {
                ".": {},
                "f:kubectl.kubernetes.io/last-applied-configuration": {},
              },
            },
            "f:spec": {
              ".": {},
              "f:availability": {},
              "f:category": {},
              "f:displayName": {},
              "f:flavorType": {},
              "f:onDemandPricing": {
                ".": {},
                "f:cost": {},
                "f:interval": {},
              },
              "f:provider": {
                ".": {},
                "f:providerFlavorID": {},
                "f:providerType": {},
              },
              "f:region": {},
              "f:resources": {
                ".": {},
                "f:cpu": {},
                "f:memory": {},
              },
            },
          },
          manager: "kubectl-client-side-apply",
          operation: "Update",
          time: "2024-03-02T02:39:11Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:labels": {
                ".": {},
                "f:region.ngpc.rxt.io/us-central-ord-1": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          time: "2024-03-02T02:39:13Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:status": {
              ".": {},
              "f:available": {},
              "f:capacity": {},
              "f:lastAuction": {},
              "f:reserved": {},
              "f:spotPricing": {
                ".": {},
                "f:hammerPricePerHour": {},
                "f:marketPricePerHour": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          subresource: "status",
          time: "2024-03-02T03:07:19Z",
        },
      ],
      name: "mh.vs1.large-ord",
      resourceVersion: "3105524",
      uid: "84bd2160-2e29-47ed-93e5-293b88c1766d",
    },
    spec: {
      availability: "available",
      category: "Memory Heavy",
      displayName: "Memory Virtual Server.Large",
      flavorType: "virtual",
      onDemandPricing: {
        cost: "0.07",
        interval: "1h",
      },
      provider: {
        providerFlavorID: "memory1-30",
        providerType: "ospc",
      },
      region: "us-central-ord-1",
      resources: {
        cpu: "4",
        memory: "30GB",
      },
    },
    status: {
      available: 0,
      capacity: 0,
      lastAuction: 0,
      reserved: 0,
      spotPricing: {
        hammerPricePerHour: "0.001000",
        marketPricePerHour: "0.001000",
      },
    },
  },
  {
    apiVersion: "ngpc.rxt.io/v1",
    kind: "ServerClass",
    metadata: {
      annotations: {
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"ngpc.rxt.io/v1","kind":"ServerClass","metadata":{"annotations":{},"name":"ch.vs1.2xlarge-ord"},"spec":{"category":"Compute Heavy","displayName":"Compute Virtual Server.Double Extra Large","flavorType":"virtual","onDemandPricing":{"cost":"0.13","interval":"1h"},"provider":{"providerFlavorID":"compute1-30","providerType":"ospc"},"region":"us-central-ord-1","resources":{"cpu":"16","memory":"30GB"}}}\n',
      },
      creationTimestamp: "2024-03-02T02:39:09Z",
      generation: 1,
      labels: {
        "region.ngpc.rxt.io/us-central-ord-1": "",
      },
      managedFields: [
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:annotations": {
                ".": {},
                "f:kubectl.kubernetes.io/last-applied-configuration": {},
              },
            },
            "f:spec": {
              ".": {},
              "f:availability": {},
              "f:category": {},
              "f:displayName": {},
              "f:flavorType": {},
              "f:onDemandPricing": {
                ".": {},
                "f:cost": {},
                "f:interval": {},
              },
              "f:provider": {
                ".": {},
                "f:providerFlavorID": {},
                "f:providerType": {},
              },
              "f:region": {},
              "f:resources": {
                ".": {},
                "f:cpu": {},
                "f:memory": {},
              },
            },
          },
          manager: "kubectl-client-side-apply",
          operation: "Update",
          time: "2024-03-02T02:39:09Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:labels": {
                ".": {},
                "f:region.ngpc.rxt.io/us-central-ord-1": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          time: "2024-03-02T02:39:09Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:status": {
              ".": {},
              "f:available": {},
              "f:capacity": {},
              "f:lastAuction": {},
              "f:reserved": {},
              "f:spotPricing": {
                ".": {},
                "f:hammerPricePerHour": {},
                "f:marketPricePerHour": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          subresource: "status",
          time: "2024-03-02T03:07:20Z",
        },
      ],
      name: "ch.vs1.2xlarge-ord",
      resourceVersion: "3105525",
      uid: "e003b3c1-6384-4ea0-8585-6a7d48cc2f9e",
    },
    spec: {
      availability: "available",
      category: "Compute Heavy",
      displayName: "Compute Virtual Server.Double Extra Large",
      flavorType: "virtual",
      onDemandPricing: {
        cost: "0.13",
        interval: "1h",
      },
      provider: {
        providerFlavorID: "compute1-30",
        providerType: "ospc",
      },
      region: "us-central-ord-1",
      resources: {
        cpu: "16",
        memory: "30GB",
      },
    },
    status: {
      available: 0,
      capacity: 0,
      lastAuction: 0,
      reserved: 0,
      spotPricing: {
        hammerPricePerHour: "0.001000",
        marketPricePerHour: "0.001000",
      },
    },
  },
  {
    apiVersion: "ngpc.rxt.io/v1",
    kind: "ServerClass",
    metadata: {
      annotations: {
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"ngpc.rxt.io/v1","kind":"ServerClass","metadata":{"annotations":{},"name":"mh.vs1.medium-ord"},"spec":{"category":"Memory Heavy","displayName":"Memory Virtual Server.Medium","flavorType":"virtual","onDemandPricing":{"cost":"0.03","interval":"1h"},"provider":{"providerFlavorID":"memory1-15","providerType":"ospc"},"region":"us-central-ord-1","resources":{"cpu":"2","memory":"15GB"}}}\n',
      },
      creationTimestamp: "2024-03-02T02:39:12Z",
      generation: 1,
      labels: {
        "region.ngpc.rxt.io/us-central-ord-1": "",
      },
      managedFields: [
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:annotations": {
                ".": {},
                "f:kubectl.kubernetes.io/last-applied-configuration": {},
              },
            },
            "f:spec": {
              ".": {},
              "f:availability": {},
              "f:category": {},
              "f:displayName": {},
              "f:flavorType": {},
              "f:onDemandPricing": {
                ".": {},
                "f:cost": {},
                "f:interval": {},
              },
              "f:provider": {
                ".": {},
                "f:providerFlavorID": {},
                "f:providerType": {},
              },
              "f:region": {},
              "f:resources": {
                ".": {},
                "f:cpu": {},
                "f:memory": {},
              },
            },
          },
          manager: "kubectl-client-side-apply",
          operation: "Update",
          time: "2024-03-02T02:39:12Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:labels": {
                ".": {},
                "f:region.ngpc.rxt.io/us-central-ord-1": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          time: "2024-03-02T02:39:13Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:status": {
              ".": {},
              "f:available": {},
              "f:capacity": {},
              "f:lastAuction": {},
              "f:reserved": {},
              "f:spotPricing": {
                ".": {},
                "f:hammerPricePerHour": {},
                "f:marketPricePerHour": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          subresource: "status",
          time: "2024-03-02T03:07:20Z",
        },
      ],
      name: "mh.vs1.medium-ord",
      resourceVersion: "3105527",
      uid: "965a0084-0257-4452-983b-faf48a464e34",
    },
    spec: {
      availability: "available",
      category: "Memory Heavy",
      displayName: "Memory Virtual Server.Medium",
      flavorType: "virtual",
      onDemandPricing: {
        cost: "0.03",
        interval: "1h",
      },
      provider: {
        providerFlavorID: "memory1-15",
        providerType: "ospc",
      },
      region: "us-central-ord-1",
      resources: {
        cpu: "2",
        memory: "15GB",
      },
    },
    status: {
      available: 0,
      capacity: 0,
      lastAuction: 0,
      reserved: 0,
      spotPricing: {
        hammerPricePerHour: "0.001000",
        marketPricePerHour: "0.001000",
      },
    },
  },
  {
    apiVersion: "ngpc.rxt.io/v1",
    kind: "ServerClass",
    metadata: {
      annotations: {
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"ngpc.rxt.io/v1","kind":"ServerClass","metadata":{"annotations":{},"name":"ch.vs1.large-ord"},"spec":{"category":"Compute Heavy","displayName":"Compute Virtual Server.Large","flavorType":"virtual","onDemandPricing":{"cost":"0.03","interval":"1h"},"provider":{"providerFlavorID":"compute1-8","providerType":"ospc"},"region":"us-central-ord-1","resources":{"cpu":"4","memory":"7.5GB"}}}\n',
      },
      creationTimestamp: "2024-03-02T02:39:09Z",
      generation: 1,
      labels: {
        "region.ngpc.rxt.io/us-central-ord-1": "",
      },
      managedFields: [
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:annotations": {
                ".": {},
                "f:kubectl.kubernetes.io/last-applied-configuration": {},
              },
            },
            "f:spec": {
              ".": {},
              "f:availability": {},
              "f:category": {},
              "f:displayName": {},
              "f:flavorType": {},
              "f:onDemandPricing": {
                ".": {},
                "f:cost": {},
                "f:interval": {},
              },
              "f:provider": {
                ".": {},
                "f:providerFlavorID": {},
                "f:providerType": {},
              },
              "f:region": {},
              "f:resources": {
                ".": {},
                "f:cpu": {},
                "f:memory": {},
              },
            },
          },
          manager: "kubectl-client-side-apply",
          operation: "Update",
          time: "2024-03-02T02:39:09Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:labels": {
                ".": {},
                "f:region.ngpc.rxt.io/us-central-ord-1": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          time: "2024-03-02T02:39:09Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:status": {
              ".": {},
              "f:available": {},
              "f:capacity": {},
              "f:lastAuction": {},
              "f:reserved": {},
              "f:spotPricing": {
                ".": {},
                "f:hammerPricePerHour": {},
                "f:marketPricePerHour": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          subresource: "status",
          time: "2024-03-02T03:07:20Z",
        },
      ],
      name: "ch.vs1.large-ord",
      resourceVersion: "3105528",
      uid: "7d9cc2fd-1901-4504-95f8-56880840cde1",
    },
    spec: {
      availability: "available",
      category: "Compute Heavy",
      displayName: "Compute Virtual Server.Large",
      flavorType: "virtual",
      onDemandPricing: {
        cost: "0.03",
        interval: "1h",
      },
      provider: {
        providerFlavorID: "compute1-8",
        providerType: "ospc",
      },
      region: "us-central-ord-1",
      resources: {
        cpu: "4",
        memory: "7.5GB",
      },
    },
    status: {
      available: 0,
      capacity: 0,
      lastAuction: 0,
      reserved: 0,
      spotPricing: {
        hammerPricePerHour: "0.001000",
        marketPricePerHour: "0.001000",
      },
    },
  },
  {
    apiVersion: "ngpc.rxt.io/v1",
    kind: "ServerClass",
    metadata: {
      annotations: {
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"ngpc.rxt.io/v1","kind":"ServerClass","metadata":{"annotations":{},"name":"ch.vs1.xlarge-ord"},"spec":{"category":"Compute Heavy","displayName":"Compute Virtual Server.Extra Large","flavorType":"virtual","onDemandPricing":{"cost":"0.07","interval":"1h"},"provider":{"providerFlavorID":"compute1-15","providerType":"ospc"},"region":"us-central-ord-1","resources":{"cpu":"8","memory":"15GB"}}}\n',
      },
      creationTimestamp: "2024-03-02T02:39:09Z",
      generation: 1,
      labels: {
        "region.ngpc.rxt.io/us-central-ord-1": "",
      },
      managedFields: [
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:annotations": {
                ".": {},
                "f:kubectl.kubernetes.io/last-applied-configuration": {},
              },
            },
            "f:spec": {
              ".": {},
              "f:availability": {},
              "f:category": {},
              "f:displayName": {},
              "f:flavorType": {},
              "f:onDemandPricing": {
                ".": {},
                "f:cost": {},
                "f:interval": {},
              },
              "f:provider": {
                ".": {},
                "f:providerFlavorID": {},
                "f:providerType": {},
              },
              "f:region": {},
              "f:resources": {
                ".": {},
                "f:cpu": {},
                "f:memory": {},
              },
            },
          },
          manager: "kubectl-client-side-apply",
          operation: "Update",
          time: "2024-03-02T02:39:09Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:labels": {
                ".": {},
                "f:region.ngpc.rxt.io/us-central-ord-1": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          time: "2024-03-02T02:39:10Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:status": {
              ".": {},
              "f:available": {},
              "f:capacity": {},
              "f:lastAuction": {},
              "f:reserved": {},
              "f:spotPricing": {
                ".": {},
                "f:hammerPricePerHour": {},
                "f:marketPricePerHour": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          subresource: "status",
          time: "2024-03-02T03:07:21Z",
        },
      ],
      name: "ch.vs1.xlarge-ord",
      resourceVersion: "3105531",
      uid: "f6fdc3e7-e708-41e5-9ef7-725f5970c31a",
    },
    spec: {
      availability: "available",
      category: "Compute Heavy",
      displayName: "Compute Virtual Server.Extra Large",
      flavorType: "virtual",
      onDemandPricing: {
        cost: "0.07",
        interval: "1h",
      },
      provider: {
        providerFlavorID: "compute1-15",
        providerType: "ospc",
      },
      region: "us-central-ord-1",
      resources: {
        cpu: "8",
        memory: "15GB",
      },
    },
    status: {
      available: 0,
      capacity: 0,
      lastAuction: 0,
      reserved: 0,
      spotPricing: {
        hammerPricePerHour: "0.001000",
        marketPricePerHour: "0.001000",
      },
    },
  },
  {
    apiVersion: "ngpc.rxt.io/v1",
    kind: "ServerClass",
    metadata: {
      annotations: {
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"ngpc.rxt.io/v1","kind":"ServerClass","metadata":{"annotations":{},"name":"gp.vs1.large-hkg"},"spec":{"category":"General Purpose","displayName":"General Virtual Server.Large","flavorType":"virtual","onDemandPricing":{"cost":"0.04","interval":"1h"},"provider":{"providerFlavorID":"io1-15","providerType":"ospc"},"region":"hkg-hkg-1","resources":{"cpu":"4","memory":"15GB"}}}\n',
      },
      creationTimestamp: "2024-03-02T02:33:45Z",
      generation: 2,
      labels: {
        "region.ngpc.rxt.io/hkg-hkg-1": "",
      },
      managedFields: [
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:annotations": {
                ".": {},
                "f:kubectl.kubernetes.io/last-applied-configuration": {},
              },
            },
            "f:spec": {
              ".": {},
              "f:availability": {},
              "f:category": {},
              "f:displayName": {},
              "f:flavorType": {},
              "f:onDemandPricing": {
                ".": {},
                "f:cost": {},
                "f:interval": {},
              },
              "f:provider": {
                ".": {},
                "f:providerFlavorID": {},
                "f:providerType": {},
              },
              "f:region": {},
              "f:resources": {
                ".": {},
                "f:cpu": {},
                "f:memory": {},
              },
            },
          },
          manager: "kubectl-client-side-apply",
          operation: "Update",
          time: "2024-03-02T02:34:52Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:labels": {
                ".": {},
                "f:region.ngpc.rxt.io/hkg-hkg-1": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          time: "2024-03-02T02:34:53Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:status": {
              ".": {},
              "f:available": {},
              "f:capacity": {},
              "f:lastAuction": {},
              "f:reserved": {},
              "f:spotPricing": {
                ".": {},
                "f:hammerPricePerHour": {},
                "f:marketPricePerHour": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          subresource: "status",
          time: "2024-03-02T03:10:36Z",
        },
      ],
      name: "gp.vs1.large-hkg",
      resourceVersion: "3105613",
      uid: "1c3fb6e4-2d9c-4b2f-9662-bc292b3353e1",
    },
    spec: {
      availability: "available",
      category: "General Purpose",
      displayName: "General Virtual Server.Large",
      flavorType: "virtual",
      onDemandPricing: {
        cost: "0.04",
        interval: "1h",
      },
      provider: {
        providerFlavorID: "io1-15",
        providerType: "ospc",
      },
      region: "hkg-hkg-1",
      resources: {
        cpu: "4",
        memory: "15GB",
      },
    },
    status: {
      available: 0,
      capacity: 0,
      lastAuction: 0,
      reserved: 0,
      spotPricing: {
        hammerPricePerHour: "0.001000",
        marketPricePerHour: "0.001000",
      },
    },
  },
  {
    apiVersion: "ngpc.rxt.io/v1",
    kind: "ServerClass",
    metadata: {
      annotations: {
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"ngpc.rxt.io/v1","kind":"ServerClass","metadata":{"annotations":{},"name":"gp.vs1.xlarge-hkg"},"spec":{"category":"General Purpose","displayName":"General Virtual Server.Extra Large","flavorType":"virtual","onDemandPricing":{"cost":"0.09","interval":"1h"},"provider":{"providerFlavorID":"io1-30","providerType":"ospc"},"region":"hkg-hkg-1","resources":{"cpu":"8","memory":"30GB"}}}\n',
      },
      creationTimestamp: "2024-03-02T02:33:46Z",
      generation: 2,
      labels: {
        "region.ngpc.rxt.io/hkg-hkg-1": "",
      },
      managedFields: [
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:annotations": {
                ".": {},
                "f:kubectl.kubernetes.io/last-applied-configuration": {},
              },
            },
            "f:spec": {
              ".": {},
              "f:availability": {},
              "f:category": {},
              "f:displayName": {},
              "f:flavorType": {},
              "f:onDemandPricing": {
                ".": {},
                "f:cost": {},
                "f:interval": {},
              },
              "f:provider": {
                ".": {},
                "f:providerFlavorID": {},
                "f:providerType": {},
              },
              "f:region": {},
              "f:resources": {
                ".": {},
                "f:cpu": {},
                "f:memory": {},
              },
            },
          },
          manager: "kubectl-client-side-apply",
          operation: "Update",
          time: "2024-03-02T02:34:52Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:labels": {
                ".": {},
                "f:region.ngpc.rxt.io/hkg-hkg-1": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          time: "2024-03-02T02:34:54Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:status": {
              ".": {},
              "f:available": {},
              "f:capacity": {},
              "f:lastAuction": {},
              "f:reserved": {},
              "f:spotPricing": {
                ".": {},
                "f:hammerPricePerHour": {},
                "f:marketPricePerHour": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          subresource: "status",
          time: "2024-03-02T03:10:37Z",
        },
      ],
      name: "gp.vs1.xlarge-hkg",
      resourceVersion: "3105614",
      uid: "942d5cd7-2c9f-478f-bd14-47a99f208b92",
    },
    spec: {
      availability: "available",
      category: "General Purpose",
      displayName: "General Virtual Server.Extra Large",
      flavorType: "virtual",
      onDemandPricing: {
        cost: "0.09",
        interval: "1h",
      },
      provider: {
        providerFlavorID: "io1-30",
        providerType: "ospc",
      },
      region: "hkg-hkg-1",
      resources: {
        cpu: "8",
        memory: "30GB",
      },
    },
    status: {
      available: 0,
      capacity: 0,
      lastAuction: 0,
      reserved: 0,
      spotPricing: {
        hammerPricePerHour: "0.001000",
        marketPricePerHour: "0.001000",
      },
    },
  },
  {
    apiVersion: "ngpc.rxt.io/v1",
    kind: "ServerClass",
    metadata: {
      annotations: {
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"ngpc.rxt.io/v1","kind":"ServerClass","metadata":{"annotations":{},"name":"gp.vs1.medium-hkg"},"spec":{"category":"General Purpose","displayName":"General Virtual Server.Medium","flavorType":"virtual","onDemandPricing":{"cost":"0.02","interval":"1h"},"provider":{"providerFlavorID":"compute1-4","providerType":"ospc"},"region":"hkg-hkg-1","resources":{"cpu":"2","memory":"3.75GB"}}}\n',
      },
      creationTimestamp: "2024-03-02T02:33:45Z",
      generation: 2,
      labels: {
        "region.ngpc.rxt.io/hkg-hkg-1": "",
      },
      managedFields: [
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:annotations": {
                ".": {},
                "f:kubectl.kubernetes.io/last-applied-configuration": {},
              },
            },
            "f:spec": {
              ".": {},
              "f:availability": {},
              "f:category": {},
              "f:displayName": {},
              "f:flavorType": {},
              "f:onDemandPricing": {
                ".": {},
                "f:cost": {},
                "f:interval": {},
              },
              "f:provider": {
                ".": {},
                "f:providerFlavorID": {},
                "f:providerType": {},
              },
              "f:region": {},
              "f:resources": {
                ".": {},
                "f:cpu": {},
                "f:memory": {},
              },
            },
          },
          manager: "kubectl-client-side-apply",
          operation: "Update",
          time: "2024-03-02T02:34:52Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:labels": {
                ".": {},
                "f:region.ngpc.rxt.io/hkg-hkg-1": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          time: "2024-03-02T02:34:53Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:status": {
              ".": {},
              "f:available": {},
              "f:capacity": {},
              "f:lastAuction": {},
              "f:reserved": {},
              "f:spotPricing": {
                ".": {},
                "f:hammerPricePerHour": {},
                "f:marketPricePerHour": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          subresource: "status",
          time: "2024-03-02T03:10:51Z",
        },
      ],
      name: "gp.vs1.medium-hkg",
      resourceVersion: "3105616",
      uid: "03be9b30-325b-4245-bf15-d975762a2737",
    },
    spec: {
      availability: "available",
      category: "General Purpose",
      displayName: "General Virtual Server.Medium",
      flavorType: "virtual",
      onDemandPricing: {
        cost: "0.02",
        interval: "1h",
      },
      provider: {
        providerFlavorID: "compute1-4",
        providerType: "ospc",
      },
      region: "hkg-hkg-1",
      resources: {
        cpu: "2",
        memory: "3.75GB",
      },
    },
    status: {
      available: 0,
      capacity: 0,
      lastAuction: 0,
      reserved: 0,
      spotPricing: {
        hammerPricePerHour: "0.001000",
        marketPricePerHour: "0.001000",
      },
    },
  },
  {
    apiVersion: "ngpc.rxt.io/v1",
    kind: "ServerClass",
    metadata: {
      annotations: {
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"ngpc.rxt.io/v1","kind":"ServerClass","metadata":{"annotations":{},"name":"gp.vs1.2xlarge-hkg"},"spec":{"category":"General Purpose","displayName":"General Virtual Server.Double Extra Large","flavorType":"virtual","onDemandPricing":{"cost":"0.18","interval":"1h"},"provider":{"providerFlavorID":"io1-60","providerType":"ospc"},"region":"hkg-hkg-1","resources":{"cpu":"16","memory":"60GB"}}}\n',
      },
      creationTimestamp: "2024-03-02T02:33:45Z",
      generation: 2,
      labels: {
        "region.ngpc.rxt.io/hkg-hkg-1": "",
      },
      managedFields: [
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:annotations": {
                ".": {},
                "f:kubectl.kubernetes.io/last-applied-configuration": {},
              },
            },
            "f:spec": {
              ".": {},
              "f:availability": {},
              "f:category": {},
              "f:displayName": {},
              "f:flavorType": {},
              "f:onDemandPricing": {
                ".": {},
                "f:cost": {},
                "f:interval": {},
              },
              "f:provider": {
                ".": {},
                "f:providerFlavorID": {},
                "f:providerType": {},
              },
              "f:region": {},
              "f:resources": {
                ".": {},
                "f:cpu": {},
                "f:memory": {},
              },
            },
          },
          manager: "kubectl-client-side-apply",
          operation: "Update",
          time: "2024-03-02T02:34:52Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:labels": {
                ".": {},
                "f:region.ngpc.rxt.io/hkg-hkg-1": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          time: "2024-03-02T02:34:52Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:status": {
              ".": {},
              "f:available": {},
              "f:capacity": {},
              "f:lastAuction": {},
              "f:reserved": {},
              "f:spotPricing": {
                ".": {},
                "f:hammerPricePerHour": {},
                "f:marketPricePerHour": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          subresource: "status",
          time: "2024-03-02T03:10:52Z",
        },
      ],
      name: "gp.vs1.2xlarge-hkg",
      resourceVersion: "3105617",
      uid: "8afd20ab-2dc3-48ca-8f4e-cfaa739902e4",
    },
    spec: {
      availability: "available",
      category: "General Purpose",
      displayName: "General Virtual Server.Double Extra Large",
      flavorType: "virtual",
      onDemandPricing: {
        cost: "0.18",
        interval: "1h",
      },
      provider: {
        providerFlavorID: "io1-60",
        providerType: "ospc",
      },
      region: "hkg-hkg-1",
      resources: {
        cpu: "16",
        memory: "60GB",
      },
    },
    status: {
      available: 0,
      capacity: 0,
      lastAuction: 0,
      reserved: 0,
      spotPricing: {
        hammerPricePerHour: "0.001000",
        marketPricePerHour: "0.001000",
      },
    },
  },
  {
    apiVersion: "ngpc.rxt.io/v1",
    kind: "ServerClass",
    metadata: {
      annotations: {
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"ngpc.rxt.io/v1","kind":"ServerClass","metadata":{"annotations":{},"name":"mh.vs1.medium-hkg"},"spec":{"category":"Memory Heavy","displayName":"Memory Virtual Server.Medium","flavorType":"virtual","onDemandPricing":{"cost":"0.03","interval":"1h"},"provider":{"providerFlavorID":"memory1-15","providerType":"ospc"},"region":"hkg-hkg-1","resources":{"cpu":"2","memory":"15GB"}}}\n',
      },
      creationTimestamp: "2024-03-02T02:33:46Z",
      generation: 2,
      labels: {
        "region.ngpc.rxt.io/hkg-hkg-1": "",
      },
      managedFields: [
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:annotations": {
                ".": {},
                "f:kubectl.kubernetes.io/last-applied-configuration": {},
              },
            },
            "f:spec": {
              ".": {},
              "f:availability": {},
              "f:category": {},
              "f:displayName": {},
              "f:flavorType": {},
              "f:onDemandPricing": {
                ".": {},
                "f:cost": {},
                "f:interval": {},
              },
              "f:provider": {
                ".": {},
                "f:providerFlavorID": {},
                "f:providerType": {},
              },
              "f:region": {},
              "f:resources": {
                ".": {},
                "f:cpu": {},
                "f:memory": {},
              },
            },
          },
          manager: "kubectl-client-side-apply",
          operation: "Update",
          time: "2024-03-02T02:34:53Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:labels": {
                ".": {},
                "f:region.ngpc.rxt.io/hkg-hkg-1": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          time: "2024-03-02T02:34:55Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:status": {
              ".": {},
              "f:available": {},
              "f:capacity": {},
              "f:lastAuction": {},
              "f:reserved": {},
              "f:spotPricing": {
                ".": {},
                "f:hammerPricePerHour": {},
                "f:marketPricePerHour": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          subresource: "status",
          time: "2024-03-02T03:16:20Z",
        },
      ],
      name: "mh.vs1.medium-hkg",
      resourceVersion: "3105664",
      uid: "c869402f-b2b0-46ae-a514-ec4bd2f33a0e",
    },
    spec: {
      availability: "available",
      category: "Memory Heavy",
      displayName: "Memory Virtual Server.Medium",
      flavorType: "virtual",
      onDemandPricing: {
        cost: "0.03",
        interval: "1h",
      },
      provider: {
        providerFlavorID: "memory1-15",
        providerType: "ospc",
      },
      region: "hkg-hkg-1",
      resources: {
        cpu: "2",
        memory: "15GB",
      },
    },
    status: {
      available: 0,
      capacity: 0,
      lastAuction: 0,
      reserved: 0,
      spotPricing: {
        hammerPricePerHour: "0.001000",
        marketPricePerHour: "0.001000",
      },
    },
  },
  {
    apiVersion: "ngpc.rxt.io/v1",
    kind: "ServerClass",
    metadata: {
      annotations: {
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"ngpc.rxt.io/v1","kind":"ServerClass","metadata":{"annotations":{},"name":"ch.vs1.medium-hkg"},"spec":{"category":"Compute Heavy","displayName":"Compute Virtual Server.Medium","flavorType":"virtual","onDemandPricing":{"cost":"0.02","interval":"1h"},"provider":{"providerFlavorID":"compute1-4","providerType":"ospc"},"region":"hkg-hkg-1","resources":{"cpu":"2","memory":"3.75GB"}}}\n',
      },
      creationTimestamp: "2024-03-02T02:33:44Z",
      generation: 2,
      labels: {
        "region.ngpc.rxt.io/hkg-hkg-1": "",
      },
      managedFields: [
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:annotations": {
                ".": {},
                "f:kubectl.kubernetes.io/last-applied-configuration": {},
              },
            },
            "f:spec": {
              ".": {},
              "f:availability": {},
              "f:category": {},
              "f:displayName": {},
              "f:flavorType": {},
              "f:onDemandPricing": {
                ".": {},
                "f:cost": {},
                "f:interval": {},
              },
              "f:provider": {
                ".": {},
                "f:providerFlavorID": {},
                "f:providerType": {},
              },
              "f:region": {},
              "f:resources": {
                ".": {},
                "f:cpu": {},
                "f:memory": {},
              },
            },
          },
          manager: "kubectl-client-side-apply",
          operation: "Update",
          time: "2024-03-02T02:34:51Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:labels": {
                ".": {},
                "f:region.ngpc.rxt.io/hkg-hkg-1": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          time: "2024-03-02T02:34:52Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:status": {
              ".": {},
              "f:available": {},
              "f:capacity": {},
              "f:lastAuction": {},
              "f:reserved": {},
              "f:spotPricing": {
                ".": {},
                "f:hammerPricePerHour": {},
                "f:marketPricePerHour": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          subresource: "status",
          time: "2024-03-02T03:16:20Z",
        },
      ],
      name: "ch.vs1.medium-hkg",
      resourceVersion: "3105665",
      uid: "abdc1a93-761a-4adc-9214-56d9478bef22",
    },
    spec: {
      availability: "available",
      category: "Compute Heavy",
      displayName: "Compute Virtual Server.Medium",
      flavorType: "virtual",
      onDemandPricing: {
        cost: "0.02",
        interval: "1h",
      },
      provider: {
        providerFlavorID: "compute1-4",
        providerType: "ospc",
      },
      region: "hkg-hkg-1",
      resources: {
        cpu: "2",
        memory: "3.75GB",
      },
    },
    status: {
      available: 0,
      capacity: 0,
      lastAuction: 0,
      reserved: 0,
      spotPricing: {
        hammerPricePerHour: "0.001000",
        marketPricePerHour: "0.001000",
      },
    },
  },
  {
    apiVersion: "ngpc.rxt.io/v1",
    kind: "ServerClass",
    metadata: {
      annotations: {
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"ngpc.rxt.io/v1","kind":"ServerClass","metadata":{"annotations":{},"name":"ch.vs1.xlarge-hkg"},"spec":{"category":"Compute Heavy","displayName":"Compute Virtual Server.Extra Large","flavorType":"virtual","onDemandPricing":{"cost":"0.07","interval":"1h"},"provider":{"providerFlavorID":"compute1-15","providerType":"ospc"},"region":"hkg-hkg-1","resources":{"cpu":"8","memory":"15GB"}}}\n',
      },
      creationTimestamp: "2024-03-02T02:33:45Z",
      generation: 2,
      labels: {
        "region.ngpc.rxt.io/hkg-hkg-1": "",
      },
      managedFields: [
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:annotations": {
                ".": {},
                "f:kubectl.kubernetes.io/last-applied-configuration": {},
              },
            },
            "f:spec": {
              ".": {},
              "f:availability": {},
              "f:category": {},
              "f:displayName": {},
              "f:flavorType": {},
              "f:onDemandPricing": {
                ".": {},
                "f:cost": {},
                "f:interval": {},
              },
              "f:provider": {
                ".": {},
                "f:providerFlavorID": {},
                "f:providerType": {},
              },
              "f:region": {},
              "f:resources": {
                ".": {},
                "f:cpu": {},
                "f:memory": {},
              },
            },
          },
          manager: "kubectl-client-side-apply",
          operation: "Update",
          time: "2024-03-02T02:34:51Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:labels": {
                ".": {},
                "f:region.ngpc.rxt.io/hkg-hkg-1": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          time: "2024-03-02T02:34:52Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:status": {
              ".": {},
              "f:available": {},
              "f:capacity": {},
              "f:lastAuction": {},
              "f:reserved": {},
              "f:spotPricing": {
                ".": {},
                "f:hammerPricePerHour": {},
                "f:marketPricePerHour": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          subresource: "status",
          time: "2024-03-02T03:16:21Z",
        },
      ],
      name: "ch.vs1.xlarge-hkg",
      resourceVersion: "3105666",
      uid: "6ed1f7ec-c224-4409-ad7b-a98f19e388bc",
    },
    spec: {
      availability: "available",
      category: "Compute Heavy",
      displayName: "Compute Virtual Server.Extra Large",
      flavorType: "virtual",
      onDemandPricing: {
        cost: "0.07",
        interval: "1h",
      },
      provider: {
        providerFlavorID: "compute1-15",
        providerType: "ospc",
      },
      region: "hkg-hkg-1",
      resources: {
        cpu: "8",
        memory: "15GB",
      },
    },
    status: {
      available: 0,
      capacity: 0,
      lastAuction: 0,
      reserved: 0,
      spotPricing: {
        hammerPricePerHour: "0.001000",
        marketPricePerHour: "0.001000",
      },
    },
  },
  {
    apiVersion: "ngpc.rxt.io/v1",
    kind: "ServerClass",
    metadata: {
      annotations: {
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"ngpc.rxt.io/v1","kind":"ServerClass","metadata":{"annotations":{},"name":"ch.vs1.large-hkg"},"spec":{"category":"Compute Heavy","displayName":"Compute Virtual Server.Large","flavorType":"virtual","onDemandPricing":{"cost":"0.03","interval":"1h"},"provider":{"providerFlavorID":"compute1-8","providerType":"ospc"},"region":"hkg-hkg-1","resources":{"cpu":"4","memory":"7.5GB"}}}\n',
      },
      creationTimestamp: "2024-03-02T02:33:44Z",
      generation: 2,
      labels: {
        "region.ngpc.rxt.io/hkg-hkg-1": "",
      },
      managedFields: [
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:annotations": {
                ".": {},
                "f:kubectl.kubernetes.io/last-applied-configuration": {},
              },
            },
            "f:spec": {
              ".": {},
              "f:availability": {},
              "f:category": {},
              "f:displayName": {},
              "f:flavorType": {},
              "f:onDemandPricing": {
                ".": {},
                "f:cost": {},
                "f:interval": {},
              },
              "f:provider": {
                ".": {},
                "f:providerFlavorID": {},
                "f:providerType": {},
              },
              "f:region": {},
              "f:resources": {
                ".": {},
                "f:cpu": {},
                "f:memory": {},
              },
            },
          },
          manager: "kubectl-client-side-apply",
          operation: "Update",
          time: "2024-03-02T02:34:51Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:labels": {
                ".": {},
                "f:region.ngpc.rxt.io/hkg-hkg-1": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          time: "2024-03-02T02:34:51Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:status": {
              ".": {},
              "f:available": {},
              "f:capacity": {},
              "f:lastAuction": {},
              "f:reserved": {},
              "f:spotPricing": {
                ".": {},
                "f:hammerPricePerHour": {},
                "f:marketPricePerHour": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          subresource: "status",
          time: "2024-03-02T03:16:21Z",
        },
      ],
      name: "ch.vs1.large-hkg",
      resourceVersion: "3105668",
      uid: "f5950a51-dfdb-4f34-a05f-640dd7145d0e",
    },
    spec: {
      availability: "available",
      category: "Compute Heavy",
      displayName: "Compute Virtual Server.Large",
      flavorType: "virtual",
      onDemandPricing: {
        cost: "0.03",
        interval: "1h",
      },
      provider: {
        providerFlavorID: "compute1-8",
        providerType: "ospc",
      },
      region: "hkg-hkg-1",
      resources: {
        cpu: "4",
        memory: "7.5GB",
      },
    },
    status: {
      available: 0,
      capacity: 0,
      lastAuction: 0,
      reserved: 0,
      spotPricing: {
        hammerPricePerHour: "0.001000",
        marketPricePerHour: "0.001000",
      },
    },
  },
  {
    apiVersion: "ngpc.rxt.io/v1",
    kind: "ServerClass",
    metadata: {
      annotations: {
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"ngpc.rxt.io/v1","kind":"ServerClass","metadata":{"annotations":{},"name":"mh.vs1.2xlarge-hkg"},"spec":{"category":"Memory Heavy","displayName":"Memory Virtual Server.Double Extra Large","flavorType":"virtual","onDemandPricing":{"cost":"0.27","interval":"1h"},"provider":{"providerFlavorID":"memory1-120","providerType":"ospc"},"region":"hkg-hkg-1","resources":{"cpu":"16","memory":"120GB"}}}\n',
      },
      creationTimestamp: "2024-03-02T02:33:46Z",
      generation: 2,
      labels: {
        "region.ngpc.rxt.io/hkg-hkg-1": "",
      },
      managedFields: [
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:annotations": {
                ".": {},
                "f:kubectl.kubernetes.io/last-applied-configuration": {},
              },
            },
            "f:spec": {
              ".": {},
              "f:availability": {},
              "f:category": {},
              "f:displayName": {},
              "f:flavorType": {},
              "f:onDemandPricing": {
                ".": {},
                "f:cost": {},
                "f:interval": {},
              },
              "f:provider": {
                ".": {},
                "f:providerFlavorID": {},
                "f:providerType": {},
              },
              "f:region": {},
              "f:resources": {
                ".": {},
                "f:cpu": {},
                "f:memory": {},
              },
            },
          },
          manager: "kubectl-client-side-apply",
          operation: "Update",
          time: "2024-03-02T02:34:53Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:labels": {
                ".": {},
                "f:region.ngpc.rxt.io/hkg-hkg-1": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          time: "2024-03-02T02:34:54Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:status": {
              ".": {},
              "f:available": {},
              "f:capacity": {},
              "f:lastAuction": {},
              "f:reserved": {},
              "f:spotPricing": {
                ".": {},
                "f:hammerPricePerHour": {},
                "f:marketPricePerHour": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          subresource: "status",
          time: "2024-03-02T03:16:22Z",
        },
      ],
      name: "mh.vs1.2xlarge-hkg",
      resourceVersion: "3105670",
      uid: "c3cf12da-f910-4e9e-8005-376c847d0427",
    },
    spec: {
      availability: "available",
      category: "Memory Heavy",
      displayName: "Memory Virtual Server.Double Extra Large",
      flavorType: "virtual",
      onDemandPricing: {
        cost: "0.27",
        interval: "1h",
      },
      provider: {
        providerFlavorID: "memory1-120",
        providerType: "ospc",
      },
      region: "hkg-hkg-1",
      resources: {
        cpu: "16",
        memory: "120GB",
      },
    },
    status: {
      available: 0,
      capacity: 0,
      lastAuction: 0,
      reserved: 0,
      spotPricing: {
        hammerPricePerHour: "0.001000",
        marketPricePerHour: "0.001000",
      },
    },
  },
  {
    apiVersion: "ngpc.rxt.io/v1",
    kind: "ServerClass",
    metadata: {
      annotations: {
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"ngpc.rxt.io/v1","kind":"ServerClass","metadata":{"annotations":{},"name":"mh.vs1.xlarge-hkg"},"spec":{"category":"Memory Heavy","displayName":"Memory Virtual Server.Extra Large","flavorType":"virtual","onDemandPricing":{"cost":"0.13","interval":"1h"},"provider":{"providerFlavorID":"memory1-60","providerType":"ospc"},"region":"hkg-hkg-1","resources":{"cpu":"8","memory":"60GB"}}}\n',
      },
      creationTimestamp: "2024-03-02T02:33:46Z",
      generation: 2,
      labels: {
        "region.ngpc.rxt.io/hkg-hkg-1": "",
      },
      managedFields: [
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:annotations": {
                ".": {},
                "f:kubectl.kubernetes.io/last-applied-configuration": {},
              },
            },
            "f:spec": {
              ".": {},
              "f:availability": {},
              "f:category": {},
              "f:displayName": {},
              "f:flavorType": {},
              "f:onDemandPricing": {
                ".": {},
                "f:cost": {},
                "f:interval": {},
              },
              "f:provider": {
                ".": {},
                "f:providerFlavorID": {},
                "f:providerType": {},
              },
              "f:region": {},
              "f:resources": {
                ".": {},
                "f:cpu": {},
                "f:memory": {},
              },
            },
          },
          manager: "kubectl-client-side-apply",
          operation: "Update",
          time: "2024-03-02T02:34:54Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:labels": {
                ".": {},
                "f:region.ngpc.rxt.io/hkg-hkg-1": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          time: "2024-03-02T02:34:55Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:status": {
              ".": {},
              "f:available": {},
              "f:capacity": {},
              "f:lastAuction": {},
              "f:reserved": {},
              "f:spotPricing": {
                ".": {},
                "f:hammerPricePerHour": {},
                "f:marketPricePerHour": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          subresource: "status",
          time: "2024-03-02T03:16:22Z",
        },
      ],
      name: "mh.vs1.xlarge-hkg",
      resourceVersion: "3105671",
      uid: "6a2d82cf-5a76-44c4-93b6-7cbced87a883",
    },
    spec: {
      availability: "available",
      category: "Memory Heavy",
      displayName: "Memory Virtual Server.Extra Large",
      flavorType: "virtual",
      onDemandPricing: {
        cost: "0.13",
        interval: "1h",
      },
      provider: {
        providerFlavorID: "memory1-60",
        providerType: "ospc",
      },
      region: "hkg-hkg-1",
      resources: {
        cpu: "8",
        memory: "60GB",
      },
    },
    status: {
      available: 0,
      capacity: 0,
      lastAuction: 0,
      reserved: 0,
      spotPricing: {
        hammerPricePerHour: "0.001000",
        marketPricePerHour: "0.001000",
      },
    },
  },
  {
    apiVersion: "ngpc.rxt.io/v1",
    kind: "ServerClass",
    metadata: {
      annotations: {
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"ngpc.rxt.io/v1","kind":"ServerClass","metadata":{"annotations":{},"name":"mh.vs1.large-hkg"},"spec":{"category":"Memory Heavy","displayName":"Memory Virtual Server.Large","flavorType":"virtual","onDemandPricing":{"cost":"0.07","interval":"1h"},"provider":{"providerFlavorID":"memory1-30","providerType":"ospc"},"region":"hkg-hkg-1","resources":{"cpu":"4","memory":"30GB"}}}\n',
      },
      creationTimestamp: "2024-03-02T02:33:46Z",
      generation: 2,
      labels: {
        "region.ngpc.rxt.io/hkg-hkg-1": "",
      },
      managedFields: [
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:annotations": {
                ".": {},
                "f:kubectl.kubernetes.io/last-applied-configuration": {},
              },
            },
            "f:spec": {
              ".": {},
              "f:availability": {},
              "f:category": {},
              "f:displayName": {},
              "f:flavorType": {},
              "f:onDemandPricing": {
                ".": {},
                "f:cost": {},
                "f:interval": {},
              },
              "f:provider": {
                ".": {},
                "f:providerFlavorID": {},
                "f:providerType": {},
              },
              "f:region": {},
              "f:resources": {
                ".": {},
                "f:cpu": {},
                "f:memory": {},
              },
            },
          },
          manager: "kubectl-client-side-apply",
          operation: "Update",
          time: "2024-03-02T02:34:53Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:labels": {
                ".": {},
                "f:region.ngpc.rxt.io/hkg-hkg-1": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          time: "2024-03-02T02:34:54Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:status": {
              ".": {},
              "f:available": {},
              "f:capacity": {},
              "f:lastAuction": {},
              "f:reserved": {},
              "f:spotPricing": {
                ".": {},
                "f:hammerPricePerHour": {},
                "f:marketPricePerHour": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          subresource: "status",
          time: "2024-03-02T03:16:22Z",
        },
      ],
      name: "mh.vs1.large-hkg",
      resourceVersion: "3105672",
      uid: "350e489e-5af6-49d4-9942-ba78a72068d0",
    },
    spec: {
      availability: "available",
      category: "Memory Heavy",
      displayName: "Memory Virtual Server.Large",
      flavorType: "virtual",
      onDemandPricing: {
        cost: "0.07",
        interval: "1h",
      },
      provider: {
        providerFlavorID: "memory1-30",
        providerType: "ospc",
      },
      region: "hkg-hkg-1",
      resources: {
        cpu: "4",
        memory: "30GB",
      },
    },
    status: {
      available: 0,
      capacity: 0,
      lastAuction: 0,
      reserved: 0,
      spotPricing: {
        hammerPricePerHour: "0.001000",
        marketPricePerHour: "0.001000",
      },
    },
  },
  {
    apiVersion: "ngpc.rxt.io/v1",
    kind: "ServerClass",
    metadata: {
      annotations: {
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"ngpc.rxt.io/v1","kind":"ServerClass","metadata":{"annotations":{},"name":"gp.vs1.medium-syd"},"spec":{"category":"General Purpose","displayName":"General Virtual Server.Medium","flavorType":"virtual","onDemandPricing":{"cost":"0.02","interval":"1h"},"provider":{"providerFlavorID":"compute1-4","providerType":"ospc"},"region":"aus-syd-1","resources":{"cpu":"2","memory":"3.75GB"}}}\n',
      },
      creationTimestamp: "2024-03-02T02:41:42Z",
      generation: 1,
      labels: {
        "region.ngpc.rxt.io/aus-syd-1": "",
      },
      managedFields: [
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:annotations": {
                ".": {},
                "f:kubectl.kubernetes.io/last-applied-configuration": {},
              },
            },
            "f:spec": {
              ".": {},
              "f:availability": {},
              "f:category": {},
              "f:displayName": {},
              "f:flavorType": {},
              "f:onDemandPricing": {
                ".": {},
                "f:cost": {},
                "f:interval": {},
              },
              "f:provider": {
                ".": {},
                "f:providerFlavorID": {},
                "f:providerType": {},
              },
              "f:region": {},
              "f:resources": {
                ".": {},
                "f:cpu": {},
                "f:memory": {},
              },
            },
          },
          manager: "kubectl-client-side-apply",
          operation: "Update",
          time: "2024-03-02T02:41:42Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:labels": {
                ".": {},
                "f:region.ngpc.rxt.io/aus-syd-1": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          time: "2024-03-02T02:41:43Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:status": {
              ".": {},
              "f:available": {},
              "f:capacity": {},
              "f:lastAuction": {},
              "f:reserved": {},
              "f:spotPricing": {
                ".": {},
                "f:hammerPricePerHour": {},
                "f:marketPricePerHour": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          subresource: "status",
          time: "2024-03-02T03:17:22Z",
        },
      ],
      name: "gp.vs1.medium-syd",
      resourceVersion: "3105678",
      uid: "f73a30f1-13ea-4bd4-bc8e-89af50c0136c",
    },
    spec: {
      availability: "available",
      category: "General Purpose",
      displayName: "General Virtual Server.Medium",
      flavorType: "virtual",
      onDemandPricing: {
        cost: "0.02",
        interval: "1h",
      },
      provider: {
        providerFlavorID: "compute1-4",
        providerType: "ospc",
      },
      region: "aus-syd-1",
      resources: {
        cpu: "2",
        memory: "3.75GB",
      },
    },
    status: {
      available: 0,
      capacity: 0,
      lastAuction: 0,
      reserved: 0,
      spotPricing: {
        hammerPricePerHour: "0.001000",
        marketPricePerHour: "0.001000",
      },
    },
  },
  {
    apiVersion: "ngpc.rxt.io/v1",
    kind: "ServerClass",
    metadata: {
      annotations: {
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"ngpc.rxt.io/v1","kind":"ServerClass","metadata":{"annotations":{},"name":"gp.vs1.xlarge-syd"},"spec":{"category":"General Purpose","displayName":"General Virtual Server.Extra Large","flavorType":"virtual","onDemandPricing":{"cost":"0.09","interval":"1h"},"provider":{"providerFlavorID":"io1-30","providerType":"ospc"},"region":"aus-syd-1","resources":{"cpu":"8","memory":"30GB"}}}\n',
      },
      creationTimestamp: "2024-03-02T02:41:42Z",
      generation: 1,
      labels: {
        "region.ngpc.rxt.io/aus-syd-1": "",
      },
      managedFields: [
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:annotations": {
                ".": {},
                "f:kubectl.kubernetes.io/last-applied-configuration": {},
              },
            },
            "f:spec": {
              ".": {},
              "f:availability": {},
              "f:category": {},
              "f:displayName": {},
              "f:flavorType": {},
              "f:onDemandPricing": {
                ".": {},
                "f:cost": {},
                "f:interval": {},
              },
              "f:provider": {
                ".": {},
                "f:providerFlavorID": {},
                "f:providerType": {},
              },
              "f:region": {},
              "f:resources": {
                ".": {},
                "f:cpu": {},
                "f:memory": {},
              },
            },
          },
          manager: "kubectl-client-side-apply",
          operation: "Update",
          time: "2024-03-02T02:41:42Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:labels": {
                ".": {},
                "f:region.ngpc.rxt.io/aus-syd-1": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          time: "2024-03-02T02:41:44Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:status": {
              ".": {},
              "f:available": {},
              "f:capacity": {},
              "f:lastAuction": {},
              "f:reserved": {},
              "f:spotPricing": {
                ".": {},
                "f:hammerPricePerHour": {},
                "f:marketPricePerHour": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          subresource: "status",
          time: "2024-03-02T03:17:22Z",
        },
      ],
      name: "gp.vs1.xlarge-syd",
      resourceVersion: "3105679",
      uid: "ea5a8f62-f2de-4b34-a6de-fdafdebd3f77",
    },
    spec: {
      availability: "available",
      category: "General Purpose",
      displayName: "General Virtual Server.Extra Large",
      flavorType: "virtual",
      onDemandPricing: {
        cost: "0.09",
        interval: "1h",
      },
      provider: {
        providerFlavorID: "io1-30",
        providerType: "ospc",
      },
      region: "aus-syd-1",
      resources: {
        cpu: "8",
        memory: "30GB",
      },
    },
    status: {
      available: 0,
      capacity: 0,
      lastAuction: 0,
      reserved: 0,
      spotPricing: {
        hammerPricePerHour: "0.001000",
        marketPricePerHour: "0.001000",
      },
    },
  },
  {
    apiVersion: "ngpc.rxt.io/v1",
    kind: "ServerClass",
    metadata: {
      annotations: {
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"ngpc.rxt.io/v1","kind":"ServerClass","metadata":{"annotations":{},"name":"ch.vs1.xlarge-syd"},"spec":{"category":"Compute Heavy","displayName":"Compute Virtual Server.Extra Large","flavorType":"virtual","onDemandPricing":{"cost":"0.07","interval":"1h"},"provider":{"providerFlavorID":"compute1-15","providerType":"ospc"},"region":"aus-syd-1","resources":{"cpu":"8","memory":"15GB"}}}\n',
      },
      creationTimestamp: "2024-03-02T02:41:41Z",
      generation: 1,
      labels: {
        "region.ngpc.rxt.io/aus-syd-1": "",
      },
      managedFields: [
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:annotations": {
                ".": {},
                "f:kubectl.kubernetes.io/last-applied-configuration": {},
              },
            },
            "f:spec": {
              ".": {},
              "f:availability": {},
              "f:category": {},
              "f:displayName": {},
              "f:flavorType": {},
              "f:onDemandPricing": {
                ".": {},
                "f:cost": {},
                "f:interval": {},
              },
              "f:provider": {
                ".": {},
                "f:providerFlavorID": {},
                "f:providerType": {},
              },
              "f:region": {},
              "f:resources": {
                ".": {},
                "f:cpu": {},
                "f:memory": {},
              },
            },
          },
          manager: "kubectl-client-side-apply",
          operation: "Update",
          time: "2024-03-02T02:41:41Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:labels": {
                ".": {},
                "f:region.ngpc.rxt.io/aus-syd-1": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          time: "2024-03-02T02:41:41Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:status": {
              ".": {},
              "f:available": {},
              "f:capacity": {},
              "f:lastAuction": {},
              "f:reserved": {},
              "f:spotPricing": {
                ".": {},
                "f:hammerPricePerHour": {},
                "f:marketPricePerHour": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          subresource: "status",
          time: "2024-03-02T03:17:34Z",
        },
      ],
      name: "ch.vs1.xlarge-syd",
      resourceVersion: "3105684",
      uid: "ffbbdab6-a2e0-4017-a28d-f3e877d4f2f4",
    },
    spec: {
      availability: "available",
      category: "Compute Heavy",
      displayName: "Compute Virtual Server.Extra Large",
      flavorType: "virtual",
      onDemandPricing: {
        cost: "0.07",
        interval: "1h",
      },
      provider: {
        providerFlavorID: "compute1-15",
        providerType: "ospc",
      },
      region: "aus-syd-1",
      resources: {
        cpu: "8",
        memory: "15GB",
      },
    },
    status: {
      available: 0,
      capacity: 0,
      lastAuction: 0,
      reserved: 0,
      spotPricing: {
        hammerPricePerHour: "0.001000",
        marketPricePerHour: "0.001000",
      },
    },
  },
  {
    apiVersion: "ngpc.rxt.io/v1",
    kind: "ServerClass",
    metadata: {
      annotations: {
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"ngpc.rxt.io/v1","kind":"ServerClass","metadata":{"annotations":{},"name":"mh.vs1.medium-syd"},"spec":{"category":"Memory Heavy","displayName":"Memory Virtual Server.Medium","flavorType":"virtual","onDemandPricing":{"cost":"0.03","interval":"1h"},"provider":{"providerFlavorID":"memory1-15","providerType":"ospc"},"region":"aus-syd-1","resources":{"cpu":"2","memory":"15GB"}}}\n',
      },
      creationTimestamp: "2024-03-02T02:41:43Z",
      generation: 1,
      labels: {
        "region.ngpc.rxt.io/aus-syd-1": "",
      },
      managedFields: [
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:annotations": {
                ".": {},
                "f:kubectl.kubernetes.io/last-applied-configuration": {},
              },
            },
            "f:spec": {
              ".": {},
              "f:availability": {},
              "f:category": {},
              "f:displayName": {},
              "f:flavorType": {},
              "f:onDemandPricing": {
                ".": {},
                "f:cost": {},
                "f:interval": {},
              },
              "f:provider": {
                ".": {},
                "f:providerFlavorID": {},
                "f:providerType": {},
              },
              "f:region": {},
              "f:resources": {
                ".": {},
                "f:cpu": {},
                "f:memory": {},
              },
            },
          },
          manager: "kubectl-client-side-apply",
          operation: "Update",
          time: "2024-03-02T02:41:43Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:labels": {
                ".": {},
                "f:region.ngpc.rxt.io/aus-syd-1": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          time: "2024-03-02T02:41:45Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:status": {
              ".": {},
              "f:available": {},
              "f:capacity": {},
              "f:lastAuction": {},
              "f:reserved": {},
              "f:spotPricing": {
                ".": {},
                "f:hammerPricePerHour": {},
                "f:marketPricePerHour": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          subresource: "status",
          time: "2024-03-02T03:17:34Z",
        },
      ],
      name: "mh.vs1.medium-syd",
      resourceVersion: "3105685",
      uid: "03153e02-90b7-407b-8955-4780fa62af22",
    },
    spec: {
      availability: "available",
      category: "Memory Heavy",
      displayName: "Memory Virtual Server.Medium",
      flavorType: "virtual",
      onDemandPricing: {
        cost: "0.03",
        interval: "1h",
      },
      provider: {
        providerFlavorID: "memory1-15",
        providerType: "ospc",
      },
      region: "aus-syd-1",
      resources: {
        cpu: "2",
        memory: "15GB",
      },
    },
    status: {
      available: 0,
      capacity: 0,
      lastAuction: 0,
      reserved: 0,
      spotPricing: {
        hammerPricePerHour: "0.001000",
        marketPricePerHour: "0.001000",
      },
    },
  },
  {
    apiVersion: "ngpc.rxt.io/v1",
    kind: "ServerClass",
    metadata: {
      annotations: {
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"ngpc.rxt.io/v1","kind":"ServerClass","metadata":{"annotations":{},"name":"ch.vs1.2xlarge-syd"},"spec":{"category":"Compute Heavy","displayName":"Compute Virtual Server.Double Extra Large","flavorType":"virtual","onDemandPricing":{"cost":"0.13","interval":"1h"},"provider":{"providerFlavorID":"compute1-30","providerType":"ospc"},"region":"aus-syd-1","resources":{"cpu":"16","memory":"30GB"}}}\n',
      },
      creationTimestamp: "2024-03-02T02:41:40Z",
      generation: 1,
      labels: {
        "region.ngpc.rxt.io/aus-syd-1": "",
      },
      managedFields: [
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:annotations": {
                ".": {},
                "f:kubectl.kubernetes.io/last-applied-configuration": {},
              },
            },
            "f:spec": {
              ".": {},
              "f:availability": {},
              "f:category": {},
              "f:displayName": {},
              "f:flavorType": {},
              "f:onDemandPricing": {
                ".": {},
                "f:cost": {},
                "f:interval": {},
              },
              "f:provider": {
                ".": {},
                "f:providerFlavorID": {},
                "f:providerType": {},
              },
              "f:region": {},
              "f:resources": {
                ".": {},
                "f:cpu": {},
                "f:memory": {},
              },
            },
          },
          manager: "kubectl-client-side-apply",
          operation: "Update",
          time: "2024-03-02T02:41:40Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:labels": {
                ".": {},
                "f:region.ngpc.rxt.io/aus-syd-1": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          time: "2024-03-02T02:41:40Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:status": {
              ".": {},
              "f:available": {},
              "f:capacity": {},
              "f:lastAuction": {},
              "f:reserved": {},
              "f:spotPricing": {
                ".": {},
                "f:hammerPricePerHour": {},
                "f:marketPricePerHour": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          subresource: "status",
          time: "2024-03-02T03:17:35Z",
        },
      ],
      name: "ch.vs1.2xlarge-syd",
      resourceVersion: "3105686",
      uid: "c7a0eeea-bf11-4ee2-9ef4-366caab2d2a0",
    },
    spec: {
      availability: "available",
      category: "Compute Heavy",
      displayName: "Compute Virtual Server.Double Extra Large",
      flavorType: "virtual",
      onDemandPricing: {
        cost: "0.13",
        interval: "1h",
      },
      provider: {
        providerFlavorID: "compute1-30",
        providerType: "ospc",
      },
      region: "aus-syd-1",
      resources: {
        cpu: "16",
        memory: "30GB",
      },
    },
    status: {
      available: 0,
      capacity: 0,
      lastAuction: 0,
      reserved: 0,
      spotPricing: {
        hammerPricePerHour: "0.001000",
        marketPricePerHour: "0.001000",
      },
    },
  },
  {
    apiVersion: "ngpc.rxt.io/v1",
    kind: "ServerClass",
    metadata: {
      annotations: {
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"ngpc.rxt.io/v1","kind":"ServerClass","metadata":{"annotations":{},"name":"mh.vs1.2xlarge-syd"},"spec":{"category":"Memory Heavy","displayName":"Memory Virtual Server.Double Extra Large","flavorType":"virtual","onDemandPricing":{"cost":"0.27","interval":"1h"},"provider":{"providerFlavorID":"memory1-120","providerType":"ospc"},"region":"aus-syd-1","resources":{"cpu":"16","memory":"120GB"}}}\n',
      },
      creationTimestamp: "2024-03-02T02:41:43Z",
      generation: 1,
      labels: {
        "region.ngpc.rxt.io/aus-syd-1": "",
      },
      managedFields: [
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:annotations": {
                ".": {},
                "f:kubectl.kubernetes.io/last-applied-configuration": {},
              },
            },
            "f:spec": {
              ".": {},
              "f:availability": {},
              "f:category": {},
              "f:displayName": {},
              "f:flavorType": {},
              "f:onDemandPricing": {
                ".": {},
                "f:cost": {},
                "f:interval": {},
              },
              "f:provider": {
                ".": {},
                "f:providerFlavorID": {},
                "f:providerType": {},
              },
              "f:region": {},
              "f:resources": {
                ".": {},
                "f:cpu": {},
                "f:memory": {},
              },
            },
          },
          manager: "kubectl-client-side-apply",
          operation: "Update",
          time: "2024-03-02T02:41:43Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:labels": {
                ".": {},
                "f:region.ngpc.rxt.io/aus-syd-1": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          time: "2024-03-02T02:41:44Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:status": {
              ".": {},
              "f:available": {},
              "f:capacity": {},
              "f:lastAuction": {},
              "f:reserved": {},
              "f:spotPricing": {
                ".": {},
                "f:hammerPricePerHour": {},
                "f:marketPricePerHour": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          subresource: "status",
          time: "2024-03-02T03:17:35Z",
        },
      ],
      name: "mh.vs1.2xlarge-syd",
      resourceVersion: "3105687",
      uid: "3a62f566-2c6d-4a09-a650-29c9debface5",
    },
    spec: {
      availability: "available",
      category: "Memory Heavy",
      displayName: "Memory Virtual Server.Double Extra Large",
      flavorType: "virtual",
      onDemandPricing: {
        cost: "0.27",
        interval: "1h",
      },
      provider: {
        providerFlavorID: "memory1-120",
        providerType: "ospc",
      },
      region: "aus-syd-1",
      resources: {
        cpu: "16",
        memory: "120GB",
      },
    },
    status: {
      available: 0,
      capacity: 0,
      lastAuction: 0,
      reserved: 0,
      spotPricing: {
        hammerPricePerHour: "0.001000",
        marketPricePerHour: "0.001000",
      },
    },
  },
  {
    apiVersion: "ngpc.rxt.io/v1",
    kind: "ServerClass",
    metadata: {
      annotations: {
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"ngpc.rxt.io/v1","kind":"ServerClass","metadata":{"annotations":{},"name":"ch.vs1.medium-syd"},"spec":{"category":"Compute Heavy","displayName":"Compute Virtual Server.Medium","flavorType":"virtual","onDemandPricing":{"cost":"0.02","interval":"1h"},"provider":{"providerFlavorID":"compute1-4","providerType":"ospc"},"region":"aus-syd-1","resources":{"cpu":"2","memory":"3.75GB"}}}\n',
      },
      creationTimestamp: "2024-03-02T02:41:41Z",
      generation: 1,
      labels: {
        "region.ngpc.rxt.io/aus-syd-1": "",
      },
      managedFields: [
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:annotations": {
                ".": {},
                "f:kubectl.kubernetes.io/last-applied-configuration": {},
              },
            },
            "f:spec": {
              ".": {},
              "f:availability": {},
              "f:category": {},
              "f:displayName": {},
              "f:flavorType": {},
              "f:onDemandPricing": {
                ".": {},
                "f:cost": {},
                "f:interval": {},
              },
              "f:provider": {
                ".": {},
                "f:providerFlavorID": {},
                "f:providerType": {},
              },
              "f:region": {},
              "f:resources": {
                ".": {},
                "f:cpu": {},
                "f:memory": {},
              },
            },
          },
          manager: "kubectl-client-side-apply",
          operation: "Update",
          time: "2024-03-02T02:41:41Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:labels": {
                ".": {},
                "f:region.ngpc.rxt.io/aus-syd-1": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          time: "2024-03-02T02:41:41Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:status": {
              ".": {},
              "f:available": {},
              "f:capacity": {},
              "f:lastAuction": {},
              "f:reserved": {},
              "f:spotPricing": {
                ".": {},
                "f:hammerPricePerHour": {},
                "f:marketPricePerHour": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          subresource: "status",
          time: "2024-03-02T03:17:35Z",
        },
      ],
      name: "ch.vs1.medium-syd",
      resourceVersion: "3105688",
      uid: "daacde75-8fce-4c4c-aeac-33f9ff0347d9",
    },
    spec: {
      availability: "available",
      category: "Compute Heavy",
      displayName: "Compute Virtual Server.Medium",
      flavorType: "virtual",
      onDemandPricing: {
        cost: "0.02",
        interval: "1h",
      },
      provider: {
        providerFlavorID: "compute1-4",
        providerType: "ospc",
      },
      region: "aus-syd-1",
      resources: {
        cpu: "2",
        memory: "3.75GB",
      },
    },
    status: {
      available: 0,
      capacity: 0,
      lastAuction: 0,
      reserved: 0,
      spotPricing: {
        hammerPricePerHour: "0.001000",
        marketPricePerHour: "0.001000",
      },
    },
  },
  {
    apiVersion: "ngpc.rxt.io/v1",
    kind: "ServerClass",
    metadata: {
      annotations: {
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"ngpc.rxt.io/v1","kind":"ServerClass","metadata":{"annotations":{},"name":"gp.vs1.large-syd"},"spec":{"category":"General Purpose","displayName":"General Virtual Server.Large","flavorType":"virtual","onDemandPricing":{"cost":"0.04","interval":"1h"},"provider":{"providerFlavorID":"io1-15","providerType":"ospc"},"region":"aus-syd-1","resources":{"cpu":"4","memory":"15GB"}}}\n',
      },
      creationTimestamp: "2024-03-02T02:41:41Z",
      generation: 1,
      labels: {
        "region.ngpc.rxt.io/aus-syd-1": "",
      },
      managedFields: [
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:annotations": {
                ".": {},
                "f:kubectl.kubernetes.io/last-applied-configuration": {},
              },
            },
            "f:spec": {
              ".": {},
              "f:availability": {},
              "f:category": {},
              "f:displayName": {},
              "f:flavorType": {},
              "f:onDemandPricing": {
                ".": {},
                "f:cost": {},
                "f:interval": {},
              },
              "f:provider": {
                ".": {},
                "f:providerFlavorID": {},
                "f:providerType": {},
              },
              "f:region": {},
              "f:resources": {
                ".": {},
                "f:cpu": {},
                "f:memory": {},
              },
            },
          },
          manager: "kubectl-client-side-apply",
          operation: "Update",
          time: "2024-03-02T02:41:41Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:labels": {
                ".": {},
                "f:region.ngpc.rxt.io/aus-syd-1": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          time: "2024-03-02T02:41:43Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:status": {
              ".": {},
              "f:available": {},
              "f:capacity": {},
              "f:lastAuction": {},
              "f:reserved": {},
              "f:spotPricing": {
                ".": {},
                "f:hammerPricePerHour": {},
                "f:marketPricePerHour": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          subresource: "status",
          time: "2024-03-02T03:17:35Z",
        },
      ],
      name: "gp.vs1.large-syd",
      resourceVersion: "3105689",
      uid: "f55d087d-fc0f-46e1-b4c6-7ede2ba19d05",
    },
    spec: {
      availability: "available",
      category: "General Purpose",
      displayName: "General Virtual Server.Large",
      flavorType: "virtual",
      onDemandPricing: {
        cost: "0.04",
        interval: "1h",
      },
      provider: {
        providerFlavorID: "io1-15",
        providerType: "ospc",
      },
      region: "aus-syd-1",
      resources: {
        cpu: "4",
        memory: "15GB",
      },
    },
    status: {
      available: 0,
      capacity: 0,
      lastAuction: 0,
      reserved: 0,
      spotPricing: {
        hammerPricePerHour: "0.001000",
        marketPricePerHour: "0.001000",
      },
    },
  },
  {
    apiVersion: "ngpc.rxt.io/v1",
    kind: "ServerClass",
    metadata: {
      annotations: {
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"ngpc.rxt.io/v1","kind":"ServerClass","metadata":{"annotations":{},"name":"ch.vs1.large-syd"},"spec":{"category":"Compute Heavy","displayName":"Compute Virtual Server.Large","flavorType":"virtual","onDemandPricing":{"cost":"0.03","interval":"1h"},"provider":{"providerFlavorID":"compute1-8","providerType":"ospc"},"region":"aus-syd-1","resources":{"cpu":"4","memory":"7.5GB"}}}\n',
      },
      creationTimestamp: "2024-03-02T02:41:40Z",
      generation: 1,
      labels: {
        "region.ngpc.rxt.io/aus-syd-1": "",
      },
      managedFields: [
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:annotations": {
                ".": {},
                "f:kubectl.kubernetes.io/last-applied-configuration": {},
              },
            },
            "f:spec": {
              ".": {},
              "f:availability": {},
              "f:category": {},
              "f:displayName": {},
              "f:flavorType": {},
              "f:onDemandPricing": {
                ".": {},
                "f:cost": {},
                "f:interval": {},
              },
              "f:provider": {
                ".": {},
                "f:providerFlavorID": {},
                "f:providerType": {},
              },
              "f:region": {},
              "f:resources": {
                ".": {},
                "f:cpu": {},
                "f:memory": {},
              },
            },
          },
          manager: "kubectl-client-side-apply",
          operation: "Update",
          time: "2024-03-02T02:41:40Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:labels": {
                ".": {},
                "f:region.ngpc.rxt.io/aus-syd-1": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          time: "2024-03-02T02:41:41Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:status": {
              ".": {},
              "f:available": {},
              "f:capacity": {},
              "f:lastAuction": {},
              "f:reserved": {},
              "f:spotPricing": {
                ".": {},
                "f:hammerPricePerHour": {},
                "f:marketPricePerHour": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          subresource: "status",
          time: "2024-03-02T03:17:35Z",
        },
      ],
      name: "ch.vs1.large-syd",
      resourceVersion: "3105690",
      uid: "adc33089-cb12-4300-9093-030f2bd6d116",
    },
    spec: {
      availability: "available",
      category: "Compute Heavy",
      displayName: "Compute Virtual Server.Large",
      flavorType: "virtual",
      onDemandPricing: {
        cost: "0.03",
        interval: "1h",
      },
      provider: {
        providerFlavorID: "compute1-8",
        providerType: "ospc",
      },
      region: "aus-syd-1",
      resources: {
        cpu: "4",
        memory: "7.5GB",
      },
    },
    status: {
      available: 0,
      capacity: 0,
      lastAuction: 0,
      reserved: 0,
      spotPricing: {
        hammerPricePerHour: "0.001000",
        marketPricePerHour: "0.001000",
      },
    },
  },
  {
    apiVersion: "ngpc.rxt.io/v1",
    kind: "ServerClass",
    metadata: {
      annotations: {
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"ngpc.rxt.io/v1","kind":"ServerClass","metadata":{"annotations":{},"name":"mh.vs1.xlarge-syd"},"spec":{"category":"Memory Heavy","displayName":"Memory Virtual Server.Extra Large","flavorType":"virtual","onDemandPricing":{"cost":"0.13","interval":"1h"},"provider":{"providerFlavorID":"memory1-60","providerType":"ospc"},"region":"aus-syd-1","resources":{"cpu":"8","memory":"60GB"}}}\n',
      },
      creationTimestamp: "2024-03-02T02:41:44Z",
      generation: 1,
      labels: {
        "region.ngpc.rxt.io/aus-syd-1": "",
      },
      managedFields: [
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:annotations": {
                ".": {},
                "f:kubectl.kubernetes.io/last-applied-configuration": {},
              },
            },
            "f:spec": {
              ".": {},
              "f:availability": {},
              "f:category": {},
              "f:displayName": {},
              "f:flavorType": {},
              "f:onDemandPricing": {
                ".": {},
                "f:cost": {},
                "f:interval": {},
              },
              "f:provider": {
                ".": {},
                "f:providerFlavorID": {},
                "f:providerType": {},
              },
              "f:region": {},
              "f:resources": {
                ".": {},
                "f:cpu": {},
                "f:memory": {},
              },
            },
          },
          manager: "kubectl-client-side-apply",
          operation: "Update",
          time: "2024-03-02T02:41:44Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:labels": {
                ".": {},
                "f:region.ngpc.rxt.io/aus-syd-1": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          time: "2024-03-02T02:41:45Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:status": {
              ".": {},
              "f:available": {},
              "f:capacity": {},
              "f:lastAuction": {},
              "f:reserved": {},
              "f:spotPricing": {
                ".": {},
                "f:hammerPricePerHour": {},
                "f:marketPricePerHour": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          subresource: "status",
          time: "2024-03-02T03:17:36Z",
        },
      ],
      name: "mh.vs1.xlarge-syd",
      resourceVersion: "3105691",
      uid: "e0165ce2-0b74-4db0-8601-1022b5b01e8a",
    },
    spec: {
      availability: "available",
      category: "Memory Heavy",
      displayName: "Memory Virtual Server.Extra Large",
      flavorType: "virtual",
      onDemandPricing: {
        cost: "0.13",
        interval: "1h",
      },
      provider: {
        providerFlavorID: "memory1-60",
        providerType: "ospc",
      },
      region: "aus-syd-1",
      resources: {
        cpu: "8",
        memory: "60GB",
      },
    },
    status: {
      available: 0,
      capacity: 0,
      lastAuction: 0,
      reserved: 0,
      spotPricing: {
        hammerPricePerHour: "0.001000",
        marketPricePerHour: "0.001000",
      },
    },
  },
  {
    apiVersion: "ngpc.rxt.io/v1",
    kind: "ServerClass",
    metadata: {
      annotations: {
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"ngpc.rxt.io/v1","kind":"ServerClass","metadata":{"annotations":{},"name":"mh.vs1.large-syd"},"spec":{"category":"Memory Heavy","displayName":"Memory Virtual Server.Large","flavorType":"virtual","onDemandPricing":{"cost":"0.07","interval":"1h"},"provider":{"providerFlavorID":"memory1-30","providerType":"ospc"},"region":"aus-syd-1","resources":{"cpu":"4","memory":"30GB"}}}\n',
      },
      creationTimestamp: "2024-03-02T02:41:43Z",
      generation: 1,
      labels: {
        "region.ngpc.rxt.io/aus-syd-1": "",
      },
      managedFields: [
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:annotations": {
                ".": {},
                "f:kubectl.kubernetes.io/last-applied-configuration": {},
              },
            },
            "f:spec": {
              ".": {},
              "f:availability": {},
              "f:category": {},
              "f:displayName": {},
              "f:flavorType": {},
              "f:onDemandPricing": {
                ".": {},
                "f:cost": {},
                "f:interval": {},
              },
              "f:provider": {
                ".": {},
                "f:providerFlavorID": {},
                "f:providerType": {},
              },
              "f:region": {},
              "f:resources": {
                ".": {},
                "f:cpu": {},
                "f:memory": {},
              },
            },
          },
          manager: "kubectl-client-side-apply",
          operation: "Update",
          time: "2024-03-02T02:41:43Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:labels": {
                ".": {},
                "f:region.ngpc.rxt.io/aus-syd-1": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          time: "2024-03-02T02:41:45Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:status": {
              ".": {},
              "f:available": {},
              "f:capacity": {},
              "f:lastAuction": {},
              "f:reserved": {},
              "f:spotPricing": {
                ".": {},
                "f:hammerPricePerHour": {},
                "f:marketPricePerHour": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          subresource: "status",
          time: "2024-03-02T03:17:36Z",
        },
      ],
      name: "mh.vs1.large-syd",
      resourceVersion: "3105693",
      uid: "d3c69e8c-4783-4cc6-9270-56dafc5793f4",
    },
    spec: {
      availability: "available",
      category: "Memory Heavy",
      displayName: "Memory Virtual Server.Large",
      flavorType: "virtual",
      onDemandPricing: {
        cost: "0.07",
        interval: "1h",
      },
      provider: {
        providerFlavorID: "memory1-30",
        providerType: "ospc",
      },
      region: "aus-syd-1",
      resources: {
        cpu: "4",
        memory: "30GB",
      },
    },
    status: {
      available: 0,
      capacity: 0,
      lastAuction: 0,
      reserved: 0,
      spotPricing: {
        hammerPricePerHour: "0.001000",
        marketPricePerHour: "0.001000",
      },
    },
  },
  {
    apiVersion: "ngpc.rxt.io/v1",
    kind: "ServerClass",
    metadata: {
      annotations: {
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"ngpc.rxt.io/v1","kind":"ServerClass","metadata":{"annotations":{},"name":"mh.vs1.xlarge-ord"},"spec":{"category":"Memory Heavy","displayName":"Memory Virtual Server.Extra Large","flavorType":"virtual","onDemandPricing":{"cost":"0.13","interval":"1h"},"provider":{"providerFlavorID":"memory1-60","providerType":"ospc"},"region":"us-central-ord-1","resources":{"cpu":"8","memory":"60GB"}}}\n',
      },
      creationTimestamp: "2024-03-02T02:39:12Z",
      generation: 1,
      labels: {
        "region.ngpc.rxt.io/us-central-ord-1": "",
      },
      managedFields: [
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:annotations": {
                ".": {},
                "f:kubectl.kubernetes.io/last-applied-configuration": {},
              },
            },
            "f:spec": {
              ".": {},
              "f:availability": {},
              "f:category": {},
              "f:displayName": {},
              "f:flavorType": {},
              "f:onDemandPricing": {
                ".": {},
                "f:cost": {},
                "f:interval": {},
              },
              "f:provider": {
                ".": {},
                "f:providerFlavorID": {},
                "f:providerType": {},
              },
              "f:region": {},
              "f:resources": {
                ".": {},
                "f:cpu": {},
                "f:memory": {},
              },
            },
          },
          manager: "kubectl-client-side-apply",
          operation: "Update",
          time: "2024-03-02T02:39:12Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:labels": {
                ".": {},
                "f:region.ngpc.rxt.io/us-central-ord-1": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          time: "2024-03-02T02:39:14Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:status": {
              ".": {},
              "f:available": {},
              "f:capacity": {},
              "f:lastAuction": {},
              "f:reserved": {},
              "f:spotPricing": {
                ".": {},
                "f:hammerPricePerHour": {},
                "f:marketPricePerHour": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          subresource: "status",
          time: "2024-03-02T03:24:35Z",
        },
      ],
      name: "mh.vs1.xlarge-ord",
      resourceVersion: "3105772",
      uid: "c9ccaba5-9297-43da-a543-4bf798bf48b3",
    },
    spec: {
      availability: "available",
      category: "Memory Heavy",
      displayName: "Memory Virtual Server.Extra Large",
      flavorType: "virtual",
      onDemandPricing: {
        cost: "0.13",
        interval: "1h",
      },
      provider: {
        providerFlavorID: "memory1-60",
        providerType: "ospc",
      },
      region: "us-central-ord-1",
      resources: {
        cpu: "8",
        memory: "60GB",
      },
    },
    status: {
      available: 0,
      capacity: 0,
      lastAuction: 492,
      reserved: 0,
      spotPricing: {
        hammerPricePerHour: "0.001000",
        marketPricePerHour: "0.001000",
      },
    },
  },
  {
    apiVersion: "ngpc.rxt.io/v1",
    kind: "ServerClass",
    metadata: {
      annotations: {
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"ngpc.rxt.io/v1","kind":"ServerClass","metadata":{"annotations":{},"name":"mh.vs1.2xlarge-ord"},"spec":{"category":"Memory Heavy","displayName":"Memory Virtual Server.Double Extra Large","flavorType":"virtual","onDemandPricing":{"cost":"0.27","interval":"1h"},"provider":{"providerFlavorID":"memory1-120","providerType":"ospc"},"region":"us-central-ord-1","resources":{"cpu":"16","memory":"120GB"}}}\n',
      },
      creationTimestamp: "2024-03-02T02:39:11Z",
      generation: 1,
      labels: {
        "region.ngpc.rxt.io/us-central-ord-1": "",
      },
      managedFields: [
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:annotations": {
                ".": {},
                "f:kubectl.kubernetes.io/last-applied-configuration": {},
              },
            },
            "f:spec": {
              ".": {},
              "f:availability": {},
              "f:category": {},
              "f:displayName": {},
              "f:flavorType": {},
              "f:onDemandPricing": {
                ".": {},
                "f:cost": {},
                "f:interval": {},
              },
              "f:provider": {
                ".": {},
                "f:providerFlavorID": {},
                "f:providerType": {},
              },
              "f:region": {},
              "f:resources": {
                ".": {},
                "f:cpu": {},
                "f:memory": {},
              },
            },
          },
          manager: "kubectl-client-side-apply",
          operation: "Update",
          time: "2024-03-02T02:39:11Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:labels": {
                ".": {},
                "f:region.ngpc.rxt.io/us-central-ord-1": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          time: "2024-03-02T02:39:12Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:status": {
              ".": {},
              "f:available": {},
              "f:capacity": {},
              "f:lastAuction": {},
              "f:reserved": {},
              "f:spotPricing": {
                ".": {},
                "f:hammerPricePerHour": {},
                "f:marketPricePerHour": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          subresource: "status",
          time: "2024-03-02T03:25:49Z",
        },
      ],
      name: "mh.vs1.2xlarge-ord",
      resourceVersion: "3105781",
      uid: "46c5829f-8fbb-41f8-ab28-506940369ce4",
    },
    spec: {
      availability: "available",
      category: "Memory Heavy",
      displayName: "Memory Virtual Server.Double Extra Large",
      flavorType: "virtual",
      onDemandPricing: {
        cost: "0.27",
        interval: "1h",
      },
      provider: {
        providerFlavorID: "memory1-120",
        providerType: "ospc",
      },
      region: "us-central-ord-1",
      resources: {
        cpu: "16",
        memory: "120GB",
      },
    },
    status: {
      available: 0,
      capacity: 0,
      lastAuction: 0,
      reserved: 0,
      spotPricing: {
        hammerPricePerHour: "0.001000",
        marketPricePerHour: "0.001000",
      },
    },
  },
  {
    apiVersion: "ngpc.rxt.io/v1",
    kind: "ServerClass",
    metadata: {
      annotations: {
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"ngpc.rxt.io/v1","kind":"ServerClass","metadata":{"annotations":{},"name":"gp.vs1.2xlarge-syd"},"spec":{"category":"General Purpose","displayName":"General Virtual Server.Double Extra Large","flavorType":"virtual","onDemandPricing":{"cost":"0.18","interval":"1h"},"provider":{"providerFlavorID":"io1-60","providerType":"ospc"},"region":"aus-syd-1","resources":{"cpu":"16","memory":"60GB"}}}\n',
      },
      creationTimestamp: "2024-03-02T02:41:41Z",
      generation: 1,
      labels: {
        "region.ngpc.rxt.io/aus-syd-1": "",
      },
      managedFields: [
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:annotations": {
                ".": {},
                "f:kubectl.kubernetes.io/last-applied-configuration": {},
              },
            },
            "f:spec": {
              ".": {},
              "f:availability": {},
              "f:category": {},
              "f:displayName": {},
              "f:flavorType": {},
              "f:onDemandPricing": {
                ".": {},
                "f:cost": {},
                "f:interval": {},
              },
              "f:provider": {
                ".": {},
                "f:providerFlavorID": {},
                "f:providerType": {},
              },
              "f:region": {},
              "f:resources": {
                ".": {},
                "f:cpu": {},
                "f:memory": {},
              },
            },
          },
          manager: "kubectl-client-side-apply",
          operation: "Update",
          time: "2024-03-02T02:41:41Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:labels": {
                ".": {},
                "f:region.ngpc.rxt.io/aus-syd-1": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          time: "2024-03-02T02:41:42Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:status": {
              ".": {},
              "f:available": {},
              "f:capacity": {},
              "f:lastAuction": {},
              "f:reserved": {},
              "f:spotPricing": {
                ".": {},
                "f:hammerPricePerHour": {},
                "f:marketPricePerHour": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          subresource: "status",
          time: "2024-03-02T05:08:03Z",
        },
      ],
      name: "gp.vs1.2xlarge-syd",
      resourceVersion: "3106546",
      uid: "440e8f25-76aa-402f-97fb-d937499a62ae",
    },
    spec: {
      availability: "available",
      category: "General Purpose",
      displayName: "General Virtual Server.Double Extra Large",
      flavorType: "virtual",
      onDemandPricing: {
        cost: "0.18",
        interval: "1h",
      },
      provider: {
        providerFlavorID: "io1-60",
        providerType: "ospc",
      },
      region: "aus-syd-1",
      resources: {
        cpu: "16",
        memory: "60GB",
      },
    },
    status: {
      available: 0,
      capacity: 0,
      lastAuction: 499,
      reserved: 0,
      spotPricing: {
        hammerPricePerHour: "0.001000",
        marketPricePerHour: "0.001000",
      },
    },
  },
  {
    apiVersion: "ngpc.rxt.io/v1",
    kind: "ServerClass",
    metadata: {
      annotations: {
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"ngpc.rxt.io/v1","kind":"ServerClass","metadata":{"annotations":{},"name":"gp.vs1.2xlarge-ord"},"spec":{"category":"General Purpose","displayName":"General Virtual Server.Double Extra Large","flavorType":"virtual","onDemandPricing":{"cost":"0.18","interval":"1h"},"provider":{"providerFlavorID":"io1-60","providerType":"ospc"},"region":"us-central-ord-1","resources":{"cpu":"16","memory":"60GB"}}}\n',
      },
      creationTimestamp: "2024-03-02T02:39:10Z",
      generation: 1,
      labels: {
        "region.ngpc.rxt.io/us-central-ord-1": "",
      },
      managedFields: [
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:annotations": {
                ".": {},
                "f:kubectl.kubernetes.io/last-applied-configuration": {},
              },
            },
            "f:spec": {
              ".": {},
              "f:availability": {},
              "f:category": {},
              "f:displayName": {},
              "f:flavorType": {},
              "f:onDemandPricing": {
                ".": {},
                "f:cost": {},
                "f:interval": {},
              },
              "f:provider": {
                ".": {},
                "f:providerFlavorID": {},
                "f:providerType": {},
              },
              "f:region": {},
              "f:resources": {
                ".": {},
                "f:cpu": {},
                "f:memory": {},
              },
            },
          },
          manager: "kubectl-client-side-apply",
          operation: "Update",
          time: "2024-03-02T02:39:10Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:labels": {
                ".": {},
                "f:region.ngpc.rxt.io/us-central-ord-1": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          time: "2024-03-02T02:39:10Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:status": {
              ".": {},
              "f:available": {},
              "f:capacity": {},
              "f:lastAuction": {},
              "f:reserved": {},
              "f:spotPricing": {
                ".": {},
                "f:hammerPricePerHour": {},
                "f:marketPricePerHour": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          subresource: "status",
          time: "2024-03-02T05:08:17Z",
        },
      ],
      name: "gp.vs1.2xlarge-ord",
      resourceVersion: "3106558",
      uid: "25a02775-7304-4f12-8c99-11f004f72ed7",
    },
    spec: {
      availability: "available",
      category: "General Purpose",
      displayName: "General Virtual Server.Double Extra Large",
      flavorType: "virtual",
      onDemandPricing: {
        cost: "0.18",
        interval: "1h",
      },
      provider: {
        providerFlavorID: "io1-60",
        providerType: "ospc",
      },
      region: "us-central-ord-1",
      resources: {
        cpu: "16",
        memory: "60GB",
      },
    },
    status: {
      available: 0,
      capacity: 0,
      lastAuction: 500,
      reserved: 0,
      spotPricing: {
        hammerPricePerHour: "0.001000",
        marketPricePerHour: "0.001000",
      },
    },
  },
  {
    apiVersion: "ngpc.rxt.io/v1",
    kind: "ServerClass",
    metadata: {
      annotations: {
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"ngpc.rxt.io/v1","kind":"ServerClass","metadata":{"annotations":{},"name":"ch.vs1.2xlarge-hkg"},"spec":{"category":"Compute Heavy","displayName":"Compute Virtual Server.Double Extra Large","flavorType":"virtual","onDemandPricing":{"cost":"0.13","interval":"1h"},"provider":{"providerFlavorID":"compute1-30","providerType":"ospc"},"region":"hkg-hkg-1","resources":{"cpu":"16","memory":"30GB"}}}\n',
      },
      creationTimestamp: "2024-03-02T02:33:44Z",
      generation: 2,
      labels: {
        "region.ngpc.rxt.io/hkg-hkg-1": "",
      },
      managedFields: [
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:annotations": {
                ".": {},
                "f:kubectl.kubernetes.io/last-applied-configuration": {},
              },
            },
            "f:spec": {
              ".": {},
              "f:availability": {},
              "f:category": {},
              "f:displayName": {},
              "f:flavorType": {},
              "f:onDemandPricing": {
                ".": {},
                "f:cost": {},
                "f:interval": {},
              },
              "f:provider": {
                ".": {},
                "f:providerFlavorID": {},
                "f:providerType": {},
              },
              "f:region": {},
              "f:resources": {
                ".": {},
                "f:cpu": {},
                "f:memory": {},
              },
            },
          },
          manager: "kubectl-client-side-apply",
          operation: "Update",
          time: "2024-03-02T02:34:51Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:labels": {
                ".": {},
                "f:region.ngpc.rxt.io/hkg-hkg-1": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          time: "2024-03-02T02:34:51Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:status": {
              ".": {},
              "f:available": {},
              "f:capacity": {},
              "f:lastAuction": {},
              "f:reserved": {},
              "f:spotPricing": {
                ".": {},
                "f:hammerPricePerHour": {},
                "f:marketPricePerHour": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          subresource: "status",
          time: "2024-03-02T05:08:19Z",
        },
      ],
      name: "ch.vs1.2xlarge-hkg",
      resourceVersion: "3106559",
      uid: "3ac4795b-388f-4374-8ea8-6591210a9101",
    },
    spec: {
      availability: "available",
      category: "Compute Heavy",
      displayName: "Compute Virtual Server.Double Extra Large",
      flavorType: "virtual",
      onDemandPricing: {
        cost: "0.13",
        interval: "1h",
      },
      provider: {
        providerFlavorID: "compute1-30",
        providerType: "ospc",
      },
      region: "hkg-hkg-1",
      resources: {
        cpu: "16",
        memory: "30GB",
      },
    },
    status: {
      available: 0,
      capacity: 0,
      lastAuction: 501,
      reserved: 0,
      spotPricing: {
        hammerPricePerHour: "0.001000",
        marketPricePerHour: "0.001000",
      },
    },
  },
  {
    apiVersion: "ngpc.rxt.io/v1",
    kind: "ServerClass",
    metadata: {
      annotations: {
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"ngpc.rxt.io/v1","kind":"ServerClass","metadata":{"annotations":{},"name":"ch.vs1.xlarge-iad"},"spec":{"category":"Compute Heavy","displayName":"Compute Virtual Server.Extra Large","flavorType":"virtual","onDemandPricing":{"cost":"0.07","interval":"1h"},"provider":{"providerFlavorID":"compute1-15","providerType":"ospc"},"region":"us-east-iad-1","resources":{"cpu":"8","memory":"15GB"}}}\n',
      },
      creationTimestamp: "2023-11-14T00:06:24Z",
      generation: 1,
      labels: {
        "region.ngpc.rxt.io/us-east-iad-1": "",
      },
      managedFields: [
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:annotations": {
                ".": {},
                "f:kubectl.kubernetes.io/last-applied-configuration": {},
              },
            },
            "f:spec": {
              ".": {},
              "f:category": {},
              "f:displayName": {},
              "f:flavorType": {},
              "f:onDemandPricing": {
                ".": {},
                "f:cost": {},
                "f:interval": {},
              },
              "f:provider": {
                ".": {},
                "f:providerFlavorID": {},
                "f:providerType": {},
              },
              "f:region": {},
              "f:resources": {
                ".": {},
                "f:cpu": {},
                "f:memory": {},
              },
            },
          },
          manager: "kubectl-client-side-apply",
          operation: "Update",
          time: "2023-11-14T00:06:24Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:labels": {
                ".": {},
                "f:region.ngpc.rxt.io/us-east-iad-1": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          time: "2023-11-14T00:06:24Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:status": {
              ".": {},
              "f:available": {},
              "f:capacity": {},
              "f:lastAuction": {},
              "f:reserved": {},
              "f:spotPricing": {
                ".": {},
                "f:hammerPricePerHour": {},
                "f:marketPricePerHour": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          subresource: "status",
          time: "2024-03-02T08:34:19Z",
        },
      ],
      name: "ch.vs1.xlarge-iad",
      resourceVersion: "3108421",
      uid: "c4cdbb94-fada-4038-b74d-144edcde8744",
    },
    spec: {
      availability: "available",
      category: "Compute Heavy",
      displayName: "Compute Virtual Server.Extra Large",
      flavorType: "virtual",
      onDemandPricing: {
        cost: "0.07",
        interval: "1h",
      },
      provider: {
        providerFlavorID: "compute1-15",
        providerType: "ospc",
      },
      region: "us-east-iad-1",
      resources: {
        cpu: "8",
        memory: "15GB",
      },
    },
    status: {
      available: 0,
      capacity: 0,
      lastAuction: 509,
      reserved: 0,
      spotPricing: {
        hammerPricePerHour: "0.002000",
        marketPricePerHour: "0.001000",
      },
    },
  },
  {
    apiVersion: "ngpc.rxt.io/v1",
    kind: "ServerClass",
    metadata: {
      annotations: {
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"ngpc.rxt.io/v1","kind":"ServerClass","metadata":{"annotations":{},"name":"gp.vs1.2xlarge-dfw"},"spec":{"category":"General Purpose","displayName":"General Virtual Server.Double Extra Large","flavorType":"virtual","onDemandPricing":{"cost":"0.18","interval":"1h"},"provider":{"providerFlavorID":"io1-60","providerType":"ospc"},"region":"us-central-dfw-1","resources":{"cpu":"16","memory":"60GB"}}}\n',
      },
      creationTimestamp: "2023-11-14T00:06:25Z",
      generation: 1,
      labels: {
        "region.ngpc.rxt.io/us-central-dfw-1": "",
      },
      managedFields: [
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:annotations": {
                ".": {},
                "f:kubectl.kubernetes.io/last-applied-configuration": {},
              },
            },
            "f:spec": {
              ".": {},
              "f:category": {},
              "f:displayName": {},
              "f:flavorType": {},
              "f:onDemandPricing": {
                ".": {},
                "f:cost": {},
                "f:interval": {},
              },
              "f:provider": {
                ".": {},
                "f:providerFlavorID": {},
                "f:providerType": {},
              },
              "f:region": {},
              "f:resources": {
                ".": {},
                "f:cpu": {},
                "f:memory": {},
              },
            },
          },
          manager: "kubectl-client-side-apply",
          operation: "Update",
          time: "2023-11-14T00:06:25Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:labels": {
                ".": {},
                "f:region.ngpc.rxt.io/us-central-dfw-1": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          time: "2023-11-14T00:06:25Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:status": {
              ".": {},
              "f:available": {},
              "f:capacity": {},
              "f:lastAuction": {},
              "f:reserved": {},
              "f:spotPricing": {
                ".": {},
                "f:hammerPricePerHour": {},
                "f:marketPricePerHour": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          subresource: "status",
          time: "2024-03-02T08:37:33Z",
        },
      ],
      name: "gp.vs1.2xlarge-dfw",
      resourceVersion: "3108467",
      uid: "4a6c8a61-49c4-434b-ade9-30ea1fc7a415",
    },
    spec: {
      availability: "available",
      category: "General Purpose",
      displayName: "General Virtual Server.Double Extra Large",
      flavorType: "virtual",
      onDemandPricing: {
        cost: "0.18",
        interval: "1h",
      },
      provider: {
        providerFlavorID: "io1-60",
        providerType: "ospc",
      },
      region: "us-central-dfw-1",
      resources: {
        cpu: "16",
        memory: "60GB",
      },
    },
    status: {
      available: 0,
      capacity: 0,
      lastAuction: 510,
      reserved: 0,
      spotPricing: {
        hammerPricePerHour: "0.001000",
        marketPricePerHour: "0.001000",
      },
    },
  },
  {
    apiVersion: "ngpc.rxt.io/v1",
    kind: "ServerClass",
    metadata: {
      annotations: {
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"ngpc.rxt.io/v1","kind":"ServerClass","metadata":{"annotations":{},"name":"gp.vs1.medium-iad"},"spec":{"category":"General Purpose","displayName":"General Virtual Server.Medium","flavorType":"virtual","onDemandPricing":{"cost":"0.02","interval":"1h"},"provider":{"providerFlavorID":"compute1-4","providerType":"ospc"},"region":"us-east-iad-1","resources":{"cpu":"2","memory":"3.75GB"}}}\n',
      },
      creationTimestamp: "2023-11-14T00:06:25Z",
      generation: 1,
      labels: {
        "region.ngpc.rxt.io/us-east-iad-1": "",
      },
      managedFields: [
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:annotations": {
                ".": {},
                "f:kubectl.kubernetes.io/last-applied-configuration": {},
              },
            },
            "f:spec": {
              ".": {},
              "f:category": {},
              "f:displayName": {},
              "f:flavorType": {},
              "f:onDemandPricing": {
                ".": {},
                "f:cost": {},
                "f:interval": {},
              },
              "f:provider": {
                ".": {},
                "f:providerFlavorID": {},
                "f:providerType": {},
              },
              "f:region": {},
              "f:resources": {
                ".": {},
                "f:cpu": {},
                "f:memory": {},
              },
            },
          },
          manager: "kubectl-client-side-apply",
          operation: "Update",
          time: "2023-11-14T00:06:25Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:labels": {
                ".": {},
                "f:region.ngpc.rxt.io/us-east-iad-1": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          time: "2023-11-14T00:06:25Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:status": {
              ".": {},
              "f:available": {},
              "f:capacity": {},
              "f:lastAuction": {},
              "f:reserved": {},
              "f:spotPricing": {
                ".": {},
                "f:hammerPricePerHour": {},
                "f:marketPricePerHour": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          subresource: "status",
          time: "2024-03-02T10:22:32Z",
        },
      ],
      name: "gp.vs1.medium-iad",
      resourceVersion: "3111008",
      uid: "42a34106-d5d4-4d01-83ee-fdad4db58d33",
    },
    spec: {
      availability: "available",
      category: "General Purpose",
      displayName: "General Virtual Server.Medium",
      flavorType: "virtual",
      onDemandPricing: {
        cost: "0.02",
        interval: "1h",
      },
      provider: {
        providerFlavorID: "compute1-4",
        providerType: "ospc",
      },
      region: "us-east-iad-1",
      resources: {
        cpu: "2",
        memory: "3.75GB",
      },
    },
    status: {
      available: 0,
      capacity: 0,
      lastAuction: 513,
      reserved: 0,
      spotPricing: {
        hammerPricePerHour: "0.002000",
        marketPricePerHour: "0.101000",
      },
    },
  },
  {
    apiVersion: "ngpc.rxt.io/v1",
    kind: "ServerClass",
    metadata: {
      annotations: {
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"ngpc.rxt.io/v1","kind":"ServerClass","metadata":{"annotations":{},"name":"ch.vs1.medium-iad"},"spec":{"category":"Compute Heavy","displayName":"Compute Virtual Server.Medium","flavorType":"virtual","onDemandPricing":{"cost":"0.02","interval":"1h"},"provider":{"providerFlavorID":"compute1-4","providerType":"ospc"},"region":"us-east-iad-1","resources":{"cpu":"2","memory":"3.75GB"}}}\n',
      },
      creationTimestamp: "2023-11-14T00:06:24Z",
      generation: 1,
      labels: {
        "region.ngpc.rxt.io/us-east-iad-1": "",
      },
      managedFields: [
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:annotations": {
                ".": {},
                "f:kubectl.kubernetes.io/last-applied-configuration": {},
              },
            },
            "f:spec": {
              ".": {},
              "f:category": {},
              "f:displayName": {},
              "f:flavorType": {},
              "f:onDemandPricing": {
                ".": {},
                "f:cost": {},
                "f:interval": {},
              },
              "f:provider": {
                ".": {},
                "f:providerFlavorID": {},
                "f:providerType": {},
              },
              "f:region": {},
              "f:resources": {
                ".": {},
                "f:cpu": {},
                "f:memory": {},
              },
            },
          },
          manager: "kubectl-client-side-apply",
          operation: "Update",
          time: "2023-11-14T00:06:24Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:labels": {
                ".": {},
                "f:region.ngpc.rxt.io/us-east-iad-1": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          time: "2023-11-14T00:06:24Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:status": {
              ".": {},
              "f:available": {},
              "f:capacity": {},
              "f:lastAuction": {},
              "f:reserved": {},
              "f:spotPricing": {
                ".": {},
                "f:hammerPricePerHour": {},
                "f:marketPricePerHour": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          subresource: "status",
          time: "2024-03-02T16:38:03Z",
        },
      ],
      name: "ch.vs1.medium-iad",
      resourceVersion: "3113321",
      uid: "af0c4ca7-efc6-4eff-a87f-c63abe99c14d",
    },
    spec: {
      availability: "available",
      category: "Compute Heavy",
      displayName: "Compute Virtual Server.Medium",
      flavorType: "virtual",
      onDemandPricing: {
        cost: "0.02",
        interval: "1h",
      },
      provider: {
        providerFlavorID: "compute1-4",
        providerType: "ospc",
      },
      region: "us-east-iad-1",
      resources: {
        cpu: "2",
        memory: "3.75GB",
      },
    },
    status: {
      available: 0,
      capacity: 0,
      lastAuction: 518,
      reserved: 0,
      spotPricing: {
        hammerPricePerHour: "0.001000",
        marketPricePerHour: "0.001000",
      },
    },
  },
  {
    apiVersion: "ngpc.rxt.io/v1",
    kind: "ServerClass",
    metadata: {
      annotations: {
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"ngpc.rxt.io/v1","kind":"ServerClass","metadata":{"annotations":{},"name":"ch.vs1.large-iad"},"spec":{"category":"Compute Heavy","displayName":"Compute Virtual Server.Large","flavorType":"virtual","onDemandPricing":{"cost":"0.03","interval":"1h"},"provider":{"providerFlavorID":"compute1-8","providerType":"ospc"},"region":"us-east-iad-1","resources":{"cpu":"4","memory":"7.5GB"}}}\n',
      },
      creationTimestamp: "2023-11-14T00:06:24Z",
      generation: 1,
      labels: {
        "region.ngpc.rxt.io/us-east-iad-1": "",
      },
      managedFields: [
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:annotations": {
                ".": {},
                "f:kubectl.kubernetes.io/last-applied-configuration": {},
              },
            },
            "f:spec": {
              ".": {},
              "f:category": {},
              "f:displayName": {},
              "f:flavorType": {},
              "f:onDemandPricing": {
                ".": {},
                "f:cost": {},
                "f:interval": {},
              },
              "f:provider": {
                ".": {},
                "f:providerFlavorID": {},
                "f:providerType": {},
              },
              "f:region": {},
              "f:resources": {
                ".": {},
                "f:cpu": {},
                "f:memory": {},
              },
            },
          },
          manager: "kubectl-client-side-apply",
          operation: "Update",
          time: "2023-11-14T00:06:24Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:labels": {
                ".": {},
                "f:region.ngpc.rxt.io/us-east-iad-1": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          time: "2023-11-14T00:06:24Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:status": {
              ".": {},
              "f:available": {},
              "f:capacity": {},
              "f:lastAuction": {},
              "f:reserved": {},
              "f:spotPricing": {
                ".": {},
                "f:hammerPricePerHour": {},
                "f:marketPricePerHour": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          subresource: "status",
          time: "2024-03-02T20:25:34Z",
        },
      ],
      name: "ch.vs1.large-iad",
      resourceVersion: "3115632",
      uid: "f25040e5-775a-4d4c-8ef9-dc6853854168",
    },
    spec: {
      availability: "available",
      category: "Compute Heavy",
      displayName: "Compute Virtual Server.Large",
      flavorType: "virtual",
      onDemandPricing: {
        cost: "0.03",
        interval: "1h",
      },
      provider: {
        providerFlavorID: "compute1-8",
        providerType: "ospc",
      },
      region: "us-east-iad-1",
      resources: {
        cpu: "4",
        memory: "7.5GB",
      },
    },
    status: {
      available: 0,
      capacity: 0,
      lastAuction: 529,
      reserved: 0,
      spotPricing: {
        hammerPricePerHour: "0.001000",
        marketPricePerHour: "0.001000",
      },
    },
  },
  {
    apiVersion: "ngpc.rxt.io/v1",
    kind: "ServerClass",
    metadata: {
      annotations: {
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"ngpc.rxt.io/v1","kind":"ServerClass","metadata":{"annotations":{},"name":"ch.vs1.2xlarge-iad"},"spec":{"category":"Compute Heavy","displayName":"Compute Virtual Server.Double Extra Large","flavorType":"virtual","onDemandPricing":{"cost":"0.13","interval":"1h"},"provider":{"providerFlavorID":"compute1-30","providerType":"ospc"},"region":"us-east-iad-1","resources":{"cpu":"16","memory":"30GB"}}}\n',
      },
      creationTimestamp: "2023-11-14T00:06:24Z",
      generation: 1,
      labels: {
        "region.ngpc.rxt.io/us-east-iad-1": "",
      },
      managedFields: [
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:annotations": {
                ".": {},
                "f:kubectl.kubernetes.io/last-applied-configuration": {},
              },
            },
            "f:spec": {
              ".": {},
              "f:category": {},
              "f:displayName": {},
              "f:flavorType": {},
              "f:onDemandPricing": {
                ".": {},
                "f:cost": {},
                "f:interval": {},
              },
              "f:provider": {
                ".": {},
                "f:providerFlavorID": {},
                "f:providerType": {},
              },
              "f:region": {},
              "f:resources": {
                ".": {},
                "f:cpu": {},
                "f:memory": {},
              },
            },
          },
          manager: "kubectl-client-side-apply",
          operation: "Update",
          time: "2023-11-14T00:06:24Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:labels": {
                ".": {},
                "f:region.ngpc.rxt.io/us-east-iad-1": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          time: "2023-11-14T00:06:24Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:status": {
              ".": {},
              "f:available": {},
              "f:capacity": {},
              "f:lastAuction": {},
              "f:reserved": {},
              "f:spotPricing": {
                ".": {},
                "f:hammerPricePerHour": {},
                "f:marketPricePerHour": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          subresource: "status",
          time: "2024-03-02T21:14:04Z",
        },
      ],
      name: "ch.vs1.2xlarge-iad",
      resourceVersion: "3116060",
      uid: "ceb52d7b-3ab8-4210-af01-77c832c3ef6f",
    },
    spec: {
      availability: "available",
      category: "Compute Heavy",
      displayName: "Compute Virtual Server.Double Extra Large",
      flavorType: "virtual",
      onDemandPricing: {
        cost: "0.13",
        interval: "1h",
      },
      provider: {
        providerFlavorID: "compute1-30",
        providerType: "ospc",
      },
      region: "us-east-iad-1",
      resources: {
        cpu: "16",
        memory: "30GB",
      },
    },
    status: {
      available: 0,
      capacity: 0,
      lastAuction: 532,
      reserved: 0,
      spotPricing: {
        hammerPricePerHour: "0.001000",
        marketPricePerHour: "0.002000",
      },
    },
  },
  {
    apiVersion: "ngpc.rxt.io/v1",
    kind: "ServerClass",
    metadata: {
      annotations: {
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"ngpc.rxt.io/v1","kind":"ServerClass","metadata":{"annotations":{},"name":"ch.vs1.2xlarge-dfw"},"spec":{"category":"Compute Heavy","displayName":"Compute Virtual Server.Double Extra Large","flavorType":"virtual","onDemandPricing":{"cost":"0.13","interval":"1h"},"provider":{"providerFlavorID":"compute1-30","providerType":"ospc"},"region":"us-central-dfw-1","resources":{"cpu":"16","memory":"30GB"}}}\n',
      },
      creationTimestamp: "2023-11-14T00:06:23Z",
      generation: 1,
      labels: {
        "region.ngpc.rxt.io/us-central-dfw-1": "",
      },
      managedFields: [
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:annotations": {
                ".": {},
                "f:kubectl.kubernetes.io/last-applied-configuration": {},
              },
            },
            "f:spec": {
              ".": {},
              "f:category": {},
              "f:displayName": {},
              "f:flavorType": {},
              "f:onDemandPricing": {
                ".": {},
                "f:cost": {},
                "f:interval": {},
              },
              "f:provider": {
                ".": {},
                "f:providerFlavorID": {},
                "f:providerType": {},
              },
              "f:region": {},
              "f:resources": {
                ".": {},
                "f:cpu": {},
                "f:memory": {},
              },
            },
          },
          manager: "kubectl-client-side-apply",
          operation: "Update",
          time: "2023-11-14T00:06:23Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:labels": {
                ".": {},
                "f:region.ngpc.rxt.io/us-central-dfw-1": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          time: "2023-11-14T00:06:23Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:status": {
              ".": {},
              "f:available": {},
              "f:capacity": {},
              "f:lastAuction": {},
              "f:reserved": {},
              "f:spotPricing": {
                ".": {},
                "f:hammerPricePerHour": {},
                "f:marketPricePerHour": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          subresource: "status",
          time: "2024-03-03T22:22:47Z",
        },
      ],
      name: "ch.vs1.2xlarge-dfw",
      resourceVersion: "3125264",
      uid: "0a21b756-c63f-407a-a3c9-003ad807ffa6",
    },
    spec: {
      availability: "available",
      category: "Compute Heavy",
      displayName: "Compute Virtual Server.Double Extra Large",
      flavorType: "virtual",
      onDemandPricing: {
        cost: "0.13",
        interval: "1h",
      },
      provider: {
        providerFlavorID: "compute1-30",
        providerType: "ospc",
      },
      region: "us-central-dfw-1",
      resources: {
        cpu: "16",
        memory: "30GB",
      },
    },
    status: {
      available: 0,
      capacity: 0,
      lastAuction: 535,
      reserved: 0,
      spotPricing: {
        hammerPricePerHour: "0.001000",
        marketPricePerHour: "0.001000",
      },
    },
  },
  {
    apiVersion: "ngpc.rxt.io/v1",
    kind: "ServerClass",
    metadata: {
      annotations: {
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"ngpc.rxt.io/v1","kind":"ServerClass","metadata":{"annotations":{},"name":"gp.vs1.large-iad"},"spec":{"category":"General Purpose","displayName":"General Virtual Server.Large","flavorType":"virtual","onDemandPricing":{"cost":"0.04","interval":"1h"},"provider":{"providerFlavorID":"io1-15","providerType":"ospc"},"region":"us-east-iad-1","resources":{"cpu":"4","memory":"15GB"}}}\n',
      },
      creationTimestamp: "2023-11-14T00:06:25Z",
      generation: 1,
      labels: {
        "region.ngpc.rxt.io/us-east-iad-1": "",
      },
      managedFields: [
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:annotations": {
                ".": {},
                "f:kubectl.kubernetes.io/last-applied-configuration": {},
              },
            },
            "f:spec": {
              ".": {},
              "f:category": {},
              "f:displayName": {},
              "f:flavorType": {},
              "f:onDemandPricing": {
                ".": {},
                "f:cost": {},
                "f:interval": {},
              },
              "f:provider": {
                ".": {},
                "f:providerFlavorID": {},
                "f:providerType": {},
              },
              "f:region": {},
              "f:resources": {
                ".": {},
                "f:cpu": {},
                "f:memory": {},
              },
            },
          },
          manager: "kubectl-client-side-apply",
          operation: "Update",
          time: "2023-11-14T00:06:25Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:labels": {
                ".": {},
                "f:region.ngpc.rxt.io/us-east-iad-1": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          time: "2023-11-14T00:06:25Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:status": {
              ".": {},
              "f:available": {},
              "f:capacity": {},
              "f:lastAuction": {},
              "f:reserved": {},
              "f:spotPricing": {
                ".": {},
                "f:hammerPricePerHour": {},
                "f:marketPricePerHour": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          subresource: "status",
          time: "2024-03-05T00:34:59Z",
        },
      ],
      name: "gp.vs1.large-iad",
      resourceVersion: "3134910",
      uid: "4eb9ea7e-eea5-4a54-a3e9-9448ffe692e8",
    },
    spec: {
      availability: "available",
      category: "General Purpose",
      displayName: "General Virtual Server.Large",
      flavorType: "virtual",
      onDemandPricing: {
        cost: "0.04",
        interval: "1h",
      },
      provider: {
        providerFlavorID: "io1-15",
        providerType: "ospc",
      },
      region: "us-east-iad-1",
      resources: {
        cpu: "4",
        memory: "15GB",
      },
    },
    status: {
      available: 0,
      capacity: 0,
      lastAuction: 544,
      reserved: 0,
      spotPricing: {
        hammerPricePerHour: "0.001000",
        marketPricePerHour: "0.002000",
      },
    },
  },
  {
    apiVersion: "ngpc.rxt.io/v1",
    kind: "ServerClass",
    metadata: {
      annotations: {
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"ngpc.rxt.io/v1","kind":"ServerClass","metadata":{"annotations":{},"name":"gp.vs1.large-dfw"},"spec":{"category":"General Purpose","displayName":"General Virtual Server.Large","flavorType":"virtual","onDemandPricing":{"cost":"0.04","interval":"1h"},"provider":{"providerFlavorID":"io1-15","providerType":"ospc"},"region":"us-central-dfw-1","resources":{"cpu":"4","memory":"15GB"}}}\n',
      },
      creationTimestamp: "2023-11-14T00:06:25Z",
      generation: 1,
      labels: {
        "region.ngpc.rxt.io/us-central-dfw-1": "",
      },
      managedFields: [
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:annotations": {
                ".": {},
                "f:kubectl.kubernetes.io/last-applied-configuration": {},
              },
            },
            "f:spec": {
              ".": {},
              "f:category": {},
              "f:displayName": {},
              "f:flavorType": {},
              "f:onDemandPricing": {
                ".": {},
                "f:cost": {},
                "f:interval": {},
              },
              "f:provider": {
                ".": {},
                "f:providerFlavorID": {},
                "f:providerType": {},
              },
              "f:region": {},
              "f:resources": {
                ".": {},
                "f:cpu": {},
                "f:memory": {},
              },
            },
          },
          manager: "kubectl-client-side-apply",
          operation: "Update",
          time: "2023-11-14T00:06:25Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:labels": {
                ".": {},
                "f:region.ngpc.rxt.io/us-central-dfw-1": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          time: "2023-11-14T00:06:25Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:status": {
              ".": {},
              "f:available": {},
              "f:capacity": {},
              "f:lastAuction": {},
              "f:reserved": {},
              "f:spotPricing": {
                ".": {},
                "f:hammerPricePerHour": {},
                "f:marketPricePerHour": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          subresource: "status",
          time: "2024-03-05T00:34:59Z",
        },
      ],
      name: "gp.vs1.large-dfw",
      resourceVersion: "3134912",
      uid: "45ffd131-e1bb-40b7-8ceb-d5dc04ca7bd9",
    },
    spec: {
      availability: "available",
      category: "General Purpose",
      displayName: "General Virtual Server.Large",
      flavorType: "virtual",
      onDemandPricing: {
        cost: "0.04",
        interval: "1h",
      },
      provider: {
        providerFlavorID: "io1-15",
        providerType: "ospc",
      },
      region: "us-central-dfw-1",
      resources: {
        cpu: "4",
        memory: "15GB",
      },
    },
    status: {
      available: 0,
      capacity: 0,
      lastAuction: 541,
      reserved: 0,
      spotPricing: {
        hammerPricePerHour: "0.001000",
        marketPricePerHour: "0.001000",
      },
    },
  },
  {
    apiVersion: "ngpc.rxt.io/v1",
    kind: "ServerClass",
    metadata: {
      annotations: {
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"ngpc.rxt.io/v1","kind":"ServerClass","metadata":{"annotations":{},"name":"ch.vs1.medium-dfw"},"spec":{"category":"Compute Heavy","displayName":"Compute Virtual Server.Medium","flavorType":"virtual","onDemandPricing":{"cost":"0.02","interval":"1h"},"provider":{"providerFlavorID":"compute1-4","providerType":"ospc"},"region":"us-central-dfw-1","resources":{"cpu":"2","memory":"3.75GB"}}}\n',
      },
      creationTimestamp: "2023-11-14T00:06:24Z",
      generation: 1,
      labels: {
        "region.ngpc.rxt.io/us-central-dfw-1": "",
      },
      managedFields: [
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:annotations": {
                ".": {},
                "f:kubectl.kubernetes.io/last-applied-configuration": {},
              },
            },
            "f:spec": {
              ".": {},
              "f:category": {},
              "f:displayName": {},
              "f:flavorType": {},
              "f:onDemandPricing": {
                ".": {},
                "f:cost": {},
                "f:interval": {},
              },
              "f:provider": {
                ".": {},
                "f:providerFlavorID": {},
                "f:providerType": {},
              },
              "f:region": {},
              "f:resources": {
                ".": {},
                "f:cpu": {},
                "f:memory": {},
              },
            },
          },
          manager: "kubectl-client-side-apply",
          operation: "Update",
          time: "2023-11-14T00:06:24Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:labels": {
                ".": {},
                "f:region.ngpc.rxt.io/us-central-dfw-1": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          time: "2023-11-14T00:06:24Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:status": {
              ".": {},
              "f:available": {},
              "f:capacity": {},
              "f:lastAuction": {},
              "f:reserved": {},
              "f:spotPricing": {
                ".": {},
                "f:hammerPricePerHour": {},
                "f:marketPricePerHour": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          subresource: "status",
          time: "2024-03-05T00:35:00Z",
        },
      ],
      name: "ch.vs1.medium-dfw",
      resourceVersion: "3134913",
      uid: "5047bdc1-8650-4614-a548-0cb74d95b5f4",
    },
    spec: {
      availability: "available",
      category: "Compute Heavy",
      displayName: "Compute Virtual Server.Medium",
      flavorType: "virtual",
      onDemandPricing: {
        cost: "0.02",
        interval: "1h",
      },
      provider: {
        providerFlavorID: "compute1-4",
        providerType: "ospc",
      },
      region: "us-central-dfw-1",
      resources: {
        cpu: "2",
        memory: "3.75GB",
      },
    },
    status: {
      available: 0,
      capacity: 0,
      lastAuction: 540,
      reserved: 0,
      spotPricing: {
        hammerPricePerHour: "0.002000",
        marketPricePerHour: "0.001000",
      },
    },
  },
  {
    apiVersion: "ngpc.rxt.io/v1",
    kind: "ServerClass",
    metadata: {
      annotations: {
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"ngpc.rxt.io/v1","kind":"ServerClass","metadata":{"annotations":{},"name":"mh.vs1.large-dfw"},"spec":{"category":"Memory Heavy","displayName":"Memory Virtual Server.Large","flavorType":"virtual","onDemandPricing":{"cost":"0.07","interval":"1h"},"provider":{"providerFlavorID":"memory1-30","providerType":"ospc"},"region":"us-central-dfw-1","resources":{"cpu":"4","memory":"30GB"}}}\n',
      },
      creationTimestamp: "2023-11-14T00:06:26Z",
      generation: 1,
      labels: {
        "region.ngpc.rxt.io/us-central-dfw-1": "",
      },
      managedFields: [
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:annotations": {
                ".": {},
                "f:kubectl.kubernetes.io/last-applied-configuration": {},
              },
            },
            "f:spec": {
              ".": {},
              "f:category": {},
              "f:displayName": {},
              "f:flavorType": {},
              "f:onDemandPricing": {
                ".": {},
                "f:cost": {},
                "f:interval": {},
              },
              "f:provider": {
                ".": {},
                "f:providerFlavorID": {},
                "f:providerType": {},
              },
              "f:region": {},
              "f:resources": {
                ".": {},
                "f:cpu": {},
                "f:memory": {},
              },
            },
          },
          manager: "kubectl-client-side-apply",
          operation: "Update",
          time: "2023-11-14T00:06:26Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:labels": {
                ".": {},
                "f:region.ngpc.rxt.io/us-central-dfw-1": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          time: "2023-11-14T00:06:26Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:status": {
              ".": {},
              "f:available": {},
              "f:capacity": {},
              "f:lastAuction": {},
              "f:reserved": {},
              "f:spotPricing": {
                ".": {},
                "f:hammerPricePerHour": {},
                "f:marketPricePerHour": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          subresource: "status",
          time: "2024-03-05T00:35:00Z",
        },
      ],
      name: "mh.vs1.large-dfw",
      resourceVersion: "3134914",
      uid: "42d2914d-f1ff-4648-86a6-b2cbd17acb5e",
    },
    spec: {
      availability: "available",
      category: "Memory Heavy",
      displayName: "Memory Virtual Server.Large",
      flavorType: "virtual",
      onDemandPricing: {
        cost: "0.07",
        interval: "1h",
      },
      provider: {
        providerFlavorID: "memory1-30",
        providerType: "ospc",
      },
      region: "us-central-dfw-1",
      resources: {
        cpu: "4",
        memory: "30GB",
      },
    },
    status: {
      available: 0,
      capacity: 0,
      lastAuction: 543,
      reserved: 0,
      spotPricing: {
        hammerPricePerHour: "0.001000",
        marketPricePerHour: "0.001000",
      },
    },
  },
  {
    apiVersion: "ngpc.rxt.io/v1",
    kind: "ServerClass",
    metadata: {
      annotations: {
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"ngpc.rxt.io/v1","kind":"ServerClass","metadata":{"annotations":{},"name":"mh.vs1.medium-iad"},"spec":{"category":"Memory Heavy","displayName":"Memory Virtual Server.Medium","flavorType":"virtual","onDemandPricing":{"cost":"0.03","interval":"1h"},"provider":{"providerFlavorID":"memory1-15","providerType":"ospc"},"region":"us-east-iad-1","resources":{"cpu":"2","memory":"15GB"}}}\n',
      },
      creationTimestamp: "2023-11-14T00:06:27Z",
      generation: 1,
      labels: {
        "region.ngpc.rxt.io/us-east-iad-1": "",
      },
      managedFields: [
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:annotations": {
                ".": {},
                "f:kubectl.kubernetes.io/last-applied-configuration": {},
              },
            },
            "f:spec": {
              ".": {},
              "f:category": {},
              "f:displayName": {},
              "f:flavorType": {},
              "f:onDemandPricing": {
                ".": {},
                "f:cost": {},
                "f:interval": {},
              },
              "f:provider": {
                ".": {},
                "f:providerFlavorID": {},
                "f:providerType": {},
              },
              "f:region": {},
              "f:resources": {
                ".": {},
                "f:cpu": {},
                "f:memory": {},
              },
            },
          },
          manager: "kubectl-client-side-apply",
          operation: "Update",
          time: "2023-11-14T00:06:27Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:labels": {
                ".": {},
                "f:region.ngpc.rxt.io/us-east-iad-1": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          time: "2023-11-14T00:06:27Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:status": {
              ".": {},
              "f:available": {},
              "f:capacity": {},
              "f:lastAuction": {},
              "f:reserved": {},
              "f:spotPricing": {
                ".": {},
                "f:hammerPricePerHour": {},
                "f:marketPricePerHour": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          subresource: "status",
          time: "2024-03-05T00:35:14Z",
        },
      ],
      name: "mh.vs1.medium-iad",
      resourceVersion: "3134916",
      uid: "598cc61a-e938-41a2-bccb-0e6ccbd0fb05",
    },
    spec: {
      availability: "available",
      category: "Memory Heavy",
      displayName: "Memory Virtual Server.Medium",
      flavorType: "virtual",
      onDemandPricing: {
        cost: "0.03",
        interval: "1h",
      },
      provider: {
        providerFlavorID: "memory1-15",
        providerType: "ospc",
      },
      region: "us-east-iad-1",
      resources: {
        cpu: "2",
        memory: "15GB",
      },
    },
    status: {
      available: 0,
      capacity: 0,
      lastAuction: 547,
      reserved: 0,
      spotPricing: {
        hammerPricePerHour: "0.001000",
        marketPricePerHour: "0.001000",
      },
    },
  },
  {
    apiVersion: "ngpc.rxt.io/v1",
    kind: "ServerClass",
    metadata: {
      annotations: {
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"ngpc.rxt.io/v1","kind":"ServerClass","metadata":{"annotations":{},"name":"mh.vs1.medium-dfw"},"spec":{"category":"Memory Heavy","displayName":"Memory Virtual Server.Medium","flavorType":"virtual","onDemandPricing":{"cost":"0.03","interval":"1h"},"provider":{"providerFlavorID":"memory1-15","providerType":"ospc"},"region":"us-central-dfw-1","resources":{"cpu":"2","memory":"15GB"}}}\n',
      },
      creationTimestamp: "2023-11-14T00:06:27Z",
      generation: 1,
      labels: {
        "region.ngpc.rxt.io/us-central-dfw-1": "",
      },
      managedFields: [
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:annotations": {
                ".": {},
                "f:kubectl.kubernetes.io/last-applied-configuration": {},
              },
            },
            "f:spec": {
              ".": {},
              "f:category": {},
              "f:displayName": {},
              "f:flavorType": {},
              "f:onDemandPricing": {
                ".": {},
                "f:cost": {},
                "f:interval": {},
              },
              "f:provider": {
                ".": {},
                "f:providerFlavorID": {},
                "f:providerType": {},
              },
              "f:region": {},
              "f:resources": {
                ".": {},
                "f:cpu": {},
                "f:memory": {},
              },
            },
          },
          manager: "kubectl-client-side-apply",
          operation: "Update",
          time: "2023-11-14T00:06:27Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:labels": {
                ".": {},
                "f:region.ngpc.rxt.io/us-central-dfw-1": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          time: "2023-11-14T00:06:27Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:status": {
              ".": {},
              "f:available": {},
              "f:capacity": {},
              "f:lastAuction": {},
              "f:reserved": {},
              "f:spotPricing": {
                ".": {},
                "f:hammerPricePerHour": {},
                "f:marketPricePerHour": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          subresource: "status",
          time: "2024-03-05T00:35:15Z",
        },
      ],
      name: "mh.vs1.medium-dfw",
      resourceVersion: "3134919",
      uid: "65194d4a-5421-47bb-bc8c-ad71d96a65d6",
    },
    spec: {
      availability: "available",
      category: "Memory Heavy",
      displayName: "Memory Virtual Server.Medium",
      flavorType: "virtual",
      onDemandPricing: {
        cost: "0.03",
        interval: "1h",
      },
      provider: {
        providerFlavorID: "memory1-15",
        providerType: "ospc",
      },
      region: "us-central-dfw-1",
      resources: {
        cpu: "2",
        memory: "15GB",
      },
    },
    status: {
      available: 0,
      capacity: 0,
      lastAuction: 546,
      reserved: 0,
      spotPricing: {
        hammerPricePerHour: "0.002000",
        marketPricePerHour: "0.001000",
      },
    },
  },
  {
    apiVersion: "ngpc.rxt.io/v1",
    kind: "ServerClass",
    metadata: {
      annotations: {
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"ngpc.rxt.io/v1","kind":"ServerClass","metadata":{"annotations":{},"name":"gp.vs1.medium-dfw"},"spec":{"category":"General Purpose","displayName":"General Virtual Server.Medium","flavorType":"virtual","onDemandPricing":{"cost":"0.02","interval":"1h"},"provider":{"providerFlavorID":"compute1-4","providerType":"ospc"},"region":"us-central-dfw-1","resources":{"cpu":"2","memory":"3.75GB"}}}\n',
      },
      creationTimestamp: "2023-11-14T00:06:25Z",
      generation: 1,
      labels: {
        "region.ngpc.rxt.io/us-central-dfw-1": "",
      },
      managedFields: [
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:annotations": {
                ".": {},
                "f:kubectl.kubernetes.io/last-applied-configuration": {},
              },
            },
            "f:spec": {
              ".": {},
              "f:category": {},
              "f:displayName": {},
              "f:flavorType": {},
              "f:onDemandPricing": {
                ".": {},
                "f:cost": {},
                "f:interval": {},
              },
              "f:provider": {
                ".": {},
                "f:providerFlavorID": {},
                "f:providerType": {},
              },
              "f:region": {},
              "f:resources": {
                ".": {},
                "f:cpu": {},
                "f:memory": {},
              },
            },
          },
          manager: "kubectl-client-side-apply",
          operation: "Update",
          time: "2023-11-14T00:06:25Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:metadata": {
              "f:labels": {
                ".": {},
                "f:region.ngpc.rxt.io/us-central-dfw-1": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          time: "2023-11-14T00:06:25Z",
        },
        {
          apiVersion: "ngpc.rxt.io/v1",
          fieldsType: "FieldsV1",
          fieldsV1: {
            "f:status": {
              ".": {},
              "f:available": {},
              "f:capacity": {},
              "f:lastAuction": {},
              "f:reserved": {},
              "f:spotPricing": {
                ".": {},
                "f:hammerPricePerHour": {},
                "f:marketPricePerHour": {},
              },
            },
          },
          manager: "manager",
          operation: "Update",
          subresource: "status",
          time: "2024-03-05T16:18:01Z",
        },
      ],
      name: "gp.vs1.medium-dfw",
      resourceVersion: "3141370",
      uid: "0a2289a2-054c-43bf-af19-abe897970aa3",
    },
    spec: {
      availability: "available",
      category: "General Purpose",
      displayName: "General Virtual Server.Medium",
      flavorType: "virtual",
      onDemandPricing: {
        cost: "0.02",
        interval: "1h",
      },
      provider: {
        providerFlavorID: "compute1-4",
        providerType: "ospc",
      },
      region: "us-central-dfw-1",
      resources: {
        cpu: "2",
        memory: "3.75GB",
      },
    },
    status: {
      available: 0,
      capacity: 0,
      lastAuction: 553,
      reserved: 0,
      spotPricing: {
        hammerPricePerHour: "0.001000",
        marketPricePerHour: "0.001000",
      },
    },
  },
]

gtag("event", "Viewed Pricing Page", {})

let pricingTableData = []
let classes = []
let regions = []
const regionSelector = document.getElementById("regionSelector")
const classesSelector = document.getElementById("classSelector")
const pricingPeriodSelector = document.getElementById("pricingPeriodSelector")
let pricingTable = null

const defaultPriceFormatOptions = {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 3,
}

function formatPrice(price, pricePeriod = "per hour") {
  return price
    ? new Intl.NumberFormat("us-EN", defaultPriceFormatOptions).format(price)
    : ""
}

function parsePrice(priceStr) {
  let regex = /\$([0-9,]+\.[0-9]+)/ // Regular expression to extract the price, including commas
  let match = priceStr.match(regex)

  if (match && match[1]) {
    let numberString = match[1].replace(/,/g, "") // Remove commas
    return parseFloat(numberString)
  } else {
    return ""
  }
}

function processData(serverClasses = []) {
  const serverClassTypes = new Set()
  const serverRegions = new Set()
  pricingTableData = serverClasses.map((sc) => {
    serverClassTypes.add(sc?.spec?.category)
    serverRegions.add(sc?.spec?.region)
    return {
      region: sc?.spec?.region,
      displayName: sc?.spec?.displayName,
      category: sc?.spec?.category,
      currentMarketPrice: formatPrice(
        sc?.status?.spotPricing?.marketPricePerHour
      ),
      cpu: sc?.spec?.resources?.cpu,
      memory: sc?.spec?.resources?.memory,
    }
  })

  serverRegions.forEach((type) => {
    regionSelector.add(new Option(type, type))
  })
  serverClassTypes.forEach((type) => {
    classesSelector.add(new Option(type, type))
  })
}

function initDataTable() {
  pricingTable = $("#pricingTable").DataTable({
    data: pricingTableData,
    columns: [
      { title: "Class", data: "category" },
      { title: "Type", data: "displayName" },
      { title: "Region", data: "region" },
      { title: "vCPUs", data: "cpu" },
      { title: "Memory (GB)", data: "memory" },
      { title: "Current Market Price", data: "currentMarketPrice" },
    ],
    columnDefs: [
      {
        target: 0,
        visible: false,
        searchable: true,
      },
      {
        target: 4,
        type: "num",
        render: function (data, type, row) {
          if (type === "sort") {
            return parseFloat(data)
          }
          return data
        },
      },
      {
        target: 5,
        type: "num-fmt",
        render: function (data, type, row) {
          if (type === "display") {
            return data + ` ${pricingPeriodSelector.value}`
          }
          return data
        },
      },
    ],
    order: [[5, "asc"]], // sort data by market price by default
    paging: false,
    ordering: true,
    searching: true,
    info: false,
    dom: "lrtp",
  })
}

processData(apiResponse)
initDataTable()

regionSelector.addEventListener("change", function () {
  const selectedRegion = this.value
  gtag(
    "event",
    "Pricing Table - Filtered servers by region:  " + selectedRegion,
    {}
  )
  amplitude.track(
    "Pricing Table - Filtered servers by region:  " + selectedRegion
  )
  pricingTable
    .column(2)
    .search(selectedRegion === "all" ? "" : selectedRegion)
    .draw()
})

classesSelector.addEventListener("change", function () {
  const selectedClass = this.value
  gtag(
    "event",
    "Pricing Table - Filtered servers by class:  " + selectedClass,
    {}
  )
  amplitude.track(
    "Pricing Table - Filtered servers by class:  " + selectedClass
  )
  pricingTable
    .column(0)
    .search(selectedClass === "all" ? "" : selectedClass)
    .draw()
})

pricingPeriodSelector.addEventListener("change", function () {
  const selectedPricePeriod = this.value
  gtag("event", "Pricing Table - Viewed prices " + selectedPricePeriod, {})
  amplitude.track("Pricing Table - Viewed prices " + selectedPricePeriod)
  pricingTable.rows().every(function () {
    let row = this.data()
    if (row.currentMarketPrice === "") return
    const currentPrice = parsePrice(row.currentMarketPrice)
    if (selectedPricePeriod === "per month") {
      row.currentMarketPrice = formatPrice(currentPrice * 24 * 30)
    } else {
      row.currentMarketPrice = formatPrice(currentPrice / (24 * 30))
    }

    this.invalidate() // Invalidate the data to update the row
  })
  pricingTable.draw()
})
