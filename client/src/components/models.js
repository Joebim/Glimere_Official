import RoyalDress from "../assets/3D/Royal_Clothes_Model-v2.glb"
import gown from "../assets/3D/Gown3D-v6.glb"
import assymetric from "../assets/3D/asymmetric dress.glb"
import sleeveless from "../assets/3D/sleevelessdress-v1.glb"
import pinkdress from "../assets/3D/Stylishpink_dress_2-v2.glb"
import pinkdresstwo from "../assets/3D/Stylishpink_dress-v3.glb"
import womengown from "../assets/3D/WCheongsam-v4.glb"
import womendress from "../assets/3D/WomensDress-v5.glb"

export const models = [
    {
      path: RoyalDress,
      boxSize: {
        desktop: { min: -1000, max: 15000 },
        mobile: { min: -1000, max: 8000 }
      },
      modelPosition: {
        desktop: [0, -2.5, 0],
        mobile: [0, -2, 0]
      },
      cameraPosition: {
        desktop: [0, 0, 9.5],
        mobile: [0, 0, 11]
      }
    },
    {
      path: gown,
      boxSize: {
        desktop: { min: -1000, max: 11800 },
        mobile: { min: -1000, max: 8200 }
      },
      modelPosition: {
        desktop: [0, -40, 0],
        mobile: [0, -25, 0]
      },
      cameraPosition: {
        desktop: [0, 0, 100],
        mobile: [0, 0, 90]
      }
    },
    // {
    //   path: assymetric,
    //   boxSize: {
    //     desktop: { min: -1000, max: 15000 },
    //     mobile: { min: -1000, max: 8000 }
    //   },
    //   modelPosition: {
    //     desktop: [0, -2.5, 0],
    //     mobile: [0, -2, 0]
    //   },
    //   cameraPosition: {
    //     desktop: [0, 0, 9.5],
    //     mobile: [0, 0, 11]
    //   }
    // },
    {
      path: sleeveless,
      boxSize: {
        desktop: { min: -1000, max: 13500 },
        mobile: { min: -1000, max: 9850 }
      },
      modelPosition: {
        desktop: [0, -35, 0],
        mobile: [0, -22, 0]
      },
      cameraPosition: {
        desktop: [0, 0, 100],
        mobile: [0, 0, 90]
      }
    },
    {
      path: pinkdress,
      boxSize: {
        desktop: { min: -1000, max: 15000 },
        mobile: { min: -1000, max: 8000 }
      },
      modelPosition: {
        desktop: [0, -37, 0],
        mobile: [0, -35, 0]
      },
      cameraPosition: {
        desktop: [0, 0, 75],
        mobile: [0, 0, 90]
      }
    },
    {
      path: pinkdresstwo,
      boxSize: {
        desktop: { min: -1000, max: 15000 },
        mobile: { min: -1000, max: 8000 }
      },
      modelPosition: {
        desktop: [0, -37, 0],
        mobile: [0, -35, 0]
      },
      cameraPosition: {
        desktop: [0, 0, 75],
        mobile: [0, 0, 90]
      }
    },
    {
      path: womengown,
      boxSize: {
        desktop: { min: -1000, max: 13500 },
        mobile: { min: -1000, max: 9850 }
      },
      modelPosition: {
        desktop: [0, -35, 0],
        mobile: [0, -22, 0]
      },
      cameraPosition: {
        desktop: [0, 0, 100],
        mobile: [0, 0, 90]
      }
    },
    {
      path: womendress,
      boxSize: {
        desktop: { min: -1000, max: 13500 },
        mobile: { min: -1000, max: 9850 }
      },
      modelPosition: {
        desktop: [0, -38, 0],
        mobile: [0, -23, 0]
      },
      cameraPosition: {
        desktop: [0, 0, 100],
        mobile: [0, 0, 90]
      }
    }
  ]