var APP_DATA = {
  "scenes": [
    {
      "id": "0-accueil---porte",
      "name": "Accueil - Porte",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.17164090629936446,
          "pitch": 0.40293168006362556,
          "rotation": 0,
          "target": "1-accueil---reception"
        },
        {
          "yaw": -1.4390310528048662,
          "pitch": 0.08150204312138953,
          "rotation": 0,
          "target": "15-escalier----1"
        },
        {
          "yaw": 1.0453841894799716,
          "pitch": 0.31091341633013236,
          "rotation": 0,
          "target": "24-crypte---ascensceur-milieu"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-accueil---reception",
      "name": "Accueil - Reception",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.03694787575934555,
          "pitch": 0.3403129686309718,
          "rotation": 0,
          "target": "0-accueil---porte"
        },
        {
          "yaw": -2.9888351507618207,
          "pitch": 0.3414230417631856,
          "rotation": 0,
          "target": "2-accueil---entre-vestibule"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-accueil---entre-vestibule",
      "name": "Accueil - Entrée Vestibule",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -2.587382722756793,
        "pitch": 0.22489484155875772,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.2662136875403256,
          "pitch": 0.5099439554892022,
          "rotation": 0,
          "target": "1-accueil---reception"
        },
        {
          "yaw": -0.023174963138663074,
          "pitch": 0.1455208195936155,
          "rotation": 0.7853981633974483,
          "target": "0-accueil---porte"
        },
        {
          "yaw": -2.4784699170513296,
          "pitch": 0.4867972685301485,
          "rotation": 0,
          "target": "3-vestibule---entre-rotisserie"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-vestibule---entre-rotisserie",
      "name": "Vestibule - Entrée rotisserie",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5959557712455474,
          "pitch": 0.1449944314313356,
          "rotation": 0,
          "target": "7-vestibule---mirroir"
        },
        {
          "yaw": 2.4108363087052975,
          "pitch": 0.40521187937023306,
          "rotation": 0,
          "target": "1-accueil---reception"
        },
        {
          "yaw": 0.3515028507475009,
          "pitch": 0.2038863199828338,
          "rotation": 0,
          "target": "5-vestibule---fenetre-rotisserie"
        },
        {
          "yaw": -0.35295603629792005,
          "pitch": 0.07209547969653585,
          "rotation": 0,
          "target": "4-vestibule---entre-terrasse"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-vestibule---entre-terrasse",
      "name": "Vestibule - Entrée terrasse",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.9156172155537794,
          "pitch": 0.39390084332245046,
          "rotation": 0,
          "target": "5-vestibule---fenetre-rotisserie"
        },
        {
          "yaw": 2.495411180559402,
          "pitch": 0.27380393041518936,
          "rotation": 0,
          "target": "3-vestibule---entre-rotisserie"
        },
        {
          "yaw": -2.6654276114031816,
          "pitch": 0.30556564574944645,
          "rotation": 0,
          "target": "6-vestibule---canape"
        },
        {
          "yaw": -3.094481891455649,
          "pitch": 0.12212818444359286,
          "rotation": 0,
          "target": "7-vestibule---mirroir"
        },
        {
          "yaw": -0.4052085884516803,
          "pitch": 0.7212476991828396,
          "rotation": 0,
          "target": "11-terasse---entre-vestibule"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-vestibule---fenetre-rotisserie",
      "name": "Vestibule - Fenetre rotisserie",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7421795678874812,
          "pitch": 0.3928928102284672,
          "rotation": 0,
          "target": "2-accueil---entre-vestibule"
        },
        {
          "yaw": 2.5334442930976753,
          "pitch": 0.2270829794909872,
          "rotation": 0,
          "target": "7-vestibule---mirroir"
        },
        {
          "yaw": 2.9990572245005147,
          "pitch": 0.13797124533595273,
          "rotation": 0,
          "target": "6-vestibule---canape"
        },
        {
          "yaw": -2.5464756952851886,
          "pitch": 0.21898514380561096,
          "rotation": 0,
          "target": "4-vestibule---entre-terrasse"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-vestibule---canape",
      "name": "Vestibule - Canape",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.20378473574986,
          "pitch": 0.449759036756177,
          "rotation": 0,
          "target": "7-vestibule---mirroir"
        },
        {
          "yaw": -0.9570363776078832,
          "pitch": 0.3066829605879402,
          "rotation": 0,
          "target": "4-vestibule---entre-terrasse"
        },
        {
          "yaw": -0.12735164866042759,
          "pitch": 0.0940893227852122,
          "rotation": 0,
          "target": "5-vestibule---fenetre-rotisserie"
        },
        {
          "yaw": 0.31578031298258935,
          "pitch": 0.10635696073891232,
          "rotation": 0,
          "target": "3-vestibule---entre-rotisserie"
        },
        {
          "yaw": 0.5766004929421218,
          "pitch": 0.11126389391872848,
          "rotation": 0,
          "target": "2-accueil---entre-vestibule"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-vestibule---mirroir",
      "name": "Vestibule - mirroir",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8078171409731514,
          "pitch": 0.3264735415733462,
          "rotation": 0,
          "target": "3-vestibule---entre-rotisserie"
        },
        {
          "yaw": 2.254672012559178,
          "pitch": 0.5651093264898499,
          "rotation": 0,
          "target": "6-vestibule---canape"
        },
        {
          "yaw": -2.4797058909146585,
          "pitch": 0.257851003967815,
          "rotation": 0,
          "target": "7-vestibule---mirroir"
        },
        {
          "yaw": 2.8227011035826486,
          "pitch": 0.22921921553372826,
          "rotation": 0,
          "target": "4-vestibule---entre-terrasse"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-rotisserie---nord",
      "name": "Rotisserie - Nord",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.43933620302865783,
          "pitch": 0.32076752934795394,
          "rotation": 0,
          "target": "9-rotisserie---milieu"
        },
        {
          "yaw": -0.4067951933422709,
          "pitch": 0.030666013086841915,
          "rotation": 0,
          "target": "10-rotisserie---sud"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-rotisserie---milieu",
      "name": "Rotisserie - Milieu",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "10-rotisserie---sud",
      "name": "Rotisserie - Sud",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6611317692593932,
          "pitch": 0.21723899247873035,
          "rotation": 0,
          "target": "1-accueil---reception"
        },
        {
          "yaw": -2.9631326960895272,
          "pitch": 0.5103141198662478,
          "rotation": 0,
          "target": "9-rotisserie---milieu"
        },
        {
          "yaw": -2.9770291976752556,
          "pitch": 0.29725476350699864,
          "rotation": 0,
          "target": "8-rotisserie---nord"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-terasse---entre-vestibule",
      "name": "Terasse - Entrée vestibule",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 2.9789211878814346,
        "pitch": 0.37790403297134034,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.8125794935601744,
          "pitch": 0.5430498214101291,
          "rotation": 0,
          "target": "13-terasse---milieu"
        },
        {
          "yaw": -2.8424990342255505,
          "pitch": 0.40538362879806655,
          "rotation": 0,
          "target": "12-terasse---nord"
        },
        {
          "yaw": 2.282165861760441,
          "pitch": 0.479530108719727,
          "rotation": 0,
          "target": "14-terasse---sud"
        },
        {
          "yaw": -0.5899454155274544,
          "pitch": 0.9706241981075756,
          "rotation": 0,
          "target": "4-vestibule---entre-terrasse"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-terasse---nord",
      "name": "Terasse - Nord",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "13-terasse---milieu",
      "name": "Terasse - Milieu",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.9998317672122976,
          "pitch": 0.3893480877006805,
          "rotation": 0,
          "target": "11-terasse---entre-vestibule"
        },
        {
          "yaw": -1.6749219736288747,
          "pitch": 0.5525100350712631,
          "rotation": 0,
          "target": "14-terasse---sud"
        },
        {
          "yaw": 1.3684440860251446,
          "pitch": 0.6746019908233762,
          "rotation": 0,
          "target": "12-terasse---nord"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-terasse---sud",
      "name": "Terasse - Sud",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.113722465770678,
          "pitch": 0.7377573625108571,
          "rotation": 0,
          "target": "13-terasse---milieu"
        },
        {
          "yaw": 2.999185912145382,
          "pitch": 0.36982391625234,
          "rotation": 0,
          "target": "12-terasse---nord"
        },
        {
          "yaw": -2.0828701198740376,
          "pitch": 0.2929830183736648,
          "rotation": 0,
          "target": "11-terasse---entre-vestibule"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-escalier----1",
      "name": "Escalier - -1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.2474195838629747,
          "pitch": -0.308531841734748,
          "rotation": 0,
          "target": "1-accueil---reception"
        },
        {
          "yaw": 0.7060176235513769,
          "pitch": 0.7485478281452682,
          "rotation": 0,
          "target": "16-escalier----2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-escalier----2",
      "name": "Escalier - -2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.03592582079799023,
          "pitch": -0.28160892445821695,
          "rotation": 0,
          "target": "16-escalier----2"
        },
        {
          "yaw": 2.874761349672024,
          "pitch": 0.5174370083090221,
          "rotation": 0,
          "target": "24-crypte---ascensceur-milieu"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-crypte---entre-cave",
      "name": "Crypte - Entrée cave",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 1.4116450319919114,
        "pitch": 0.26199049400626606,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.386431964080902,
          "pitch": 0.37346560892006764,
          "rotation": 0,
          "target": "18-crypte---cave-est"
        },
        {
          "yaw": 2.366757846215684,
          "pitch": 0.5626770013050759,
          "rotation": 0,
          "target": "19-crypte---cave-ouest"
        },
        {
          "yaw": 0.23586779335214203,
          "pitch": 0.4779739658482285,
          "rotation": 0,
          "target": "20-crypte---lounge-milieu"
        },
        {
          "yaw": -1.057757693539095,
          "pitch": 0.025678297439974074,
          "rotation": 0,
          "target": "22-crypte---ascensceur-nord"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-crypte---cave-est",
      "name": "Crypte - Cave Est",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7655087265028122,
          "pitch": 0.6494320182019937,
          "rotation": 0,
          "target": "17-crypte---entre-cave"
        },
        {
          "yaw": -0.17082846816031427,
          "pitch": 0.36779488981334296,
          "rotation": 0,
          "target": "19-crypte---cave-ouest"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-crypte---cave-ouest",
      "name": "Crypte - Cave Ouest",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0576273563361376,
          "pitch": 0.36030285054223654,
          "rotation": 0,
          "target": "18-crypte---cave-est"
        },
        {
          "yaw": -2.123936257436336,
          "pitch": 0.6044001389856231,
          "rotation": 0,
          "target": "17-crypte---entre-cave"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-crypte---lounge-milieu",
      "name": "Crypte - Lounge milieu",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.16313931461890796,
          "pitch": 0.6186947420870563,
          "rotation": 0,
          "target": "21-crypte---lounge-tableau"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-crypte---lounge-tableau",
      "name": "Crypte - Lounge tableau",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0769159723982105,
          "pitch": 0.5613312079734527,
          "rotation": 0,
          "target": "20-crypte---lounge-milieu"
        },
        {
          "yaw": -2.9264968124002664,
          "pitch": 0.17232998581096304,
          "rotation": 0,
          "target": "17-crypte---entre-cave"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-crypte---ascensceur-nord",
      "name": "Crypte - Ascensceur Nord",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.222803635798437,
          "pitch": 0.2827453957536523,
          "rotation": 0,
          "target": "17-crypte---entre-cave"
        },
        {
          "yaw": -3.06331670958404,
          "pitch": 0.057494253852393484,
          "rotation": 0,
          "target": "23-crypte---ascensceur-sud"
        },
        {
          "yaw": 3.042906075372718,
          "pitch": 0.5512961906224518,
          "rotation": 0,
          "target": "24-crypte---ascensceur-milieu"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-crypte---ascensceur-sud",
      "name": "Crypte - Ascensceur Sud",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -3.0242601995006897,
        "pitch": 0.13527160135738292,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.16880175960055155,
          "pitch": 0.5087119145392123,
          "rotation": 0,
          "target": "24-crypte---ascensceur-milieu"
        },
        {
          "yaw": -0.28360310390776,
          "pitch": 0.008883238404303384,
          "rotation": 0,
          "target": "22-crypte---ascensceur-nord"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-crypte---ascensceur-milieu",
      "name": "Crypte - Ascensceur milieu",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.90798220681204,
          "pitch": 0.530101526970018,
          "rotation": 0,
          "target": "23-crypte---ascensceur-sud"
        },
        {
          "yaw": -0.24416435421662896,
          "pitch": 0.12690229560885946,
          "rotation": 0,
          "target": "22-crypte---ascensceur-nord"
        },
        {
          "yaw": 0.7299692889693112,
          "pitch": 0.5434911104994669,
          "rotation": 0,
          "target": "16-escalier----2"
        },
        {
          "yaw": -1.3949118178584659,
          "pitch": 0.11811674961183449,
          "rotation": 0,
          "target": "0-accueil---porte"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Auberge du Raisin",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
