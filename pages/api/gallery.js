const photos = [
  {
    src: "https://res.cloudinary.com/omher/image/upload/v1636455564/blender/Apples_twodxd.jpg",
    width: 6,
    height: 3
  },
  {
    src: "https://res.cloudinary.com/omher/image/upload/v1636455563/blender/Warehouse_spj62u.jpg",
    width: 6,
    height: 3
  },
  {
    src: "https://res.cloudinary.com/omher/image/upload/v1636455563/blender/Boba_ffu2l8.jpg",
    width: 5,
    height: 4
  },
  {
    src: "https://res.cloudinary.com/omher/image/upload/v1636455563/blender/deadpool_vhdncy.jpg",
    width: 5,
    height: 3
  },
  {
    src: "https://res.cloudinary.com/omher/image/upload/v1636455563/blender/Pears_hvvpbo.jpg",
    width: 6,
    height: 3
  },
  {
    src: "https://res.cloudinary.com/omher/image/upload/v1636455563/blender/HumanVsRobot_xkw4ph.jpg",
    width: 4,
    height: 3
  },
  {
    src: "https://res.cloudinary.com/omher/image/upload/v1636455563/blender/onoh_hc6myz.jpg",
    width: 3,
    height: 4
  },
  {
    src: "https://res.cloudinary.com/omher/image/upload/v1636454908/blender/donout0_o8gw9j.jpg",
    width: 3,
    height: 4
  },
  {
    src: "https://res.cloudinary.com/omher/image/upload/v1636454589/blender/Car_low_poly_gor3du.png",
    width: 6,
    height: 3
  },
  {
    src: "https://res.cloudinary.com/omher/image/upload/v1636454267/blender/pickup_ujh0n4.png",
    width: 6,
    height: 3
  },
  {
    src: "https://res.cloudinary.com/omher/image/upload/v1636454266/blender/Rocket_xsd8s8.png",
    width: 4,
    height: 3
  },
  {
    src: "https://res.cloudinary.com/omher/image/upload/v1636454264/blender/Cotagge_s5xxac.png",
    width: 6,
    height: 4
  },
  {
    src: "https://res.cloudinary.com/omher/image/upload/v1636454262/blender/Floating_r9fosf.png",
    width: 6,
    height: 6
  }
];
export default function handler(req, res) {
  res.status(200).json({ photos });
}
