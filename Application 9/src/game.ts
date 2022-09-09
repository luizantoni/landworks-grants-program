
const entity = new Entity()
entity.addComponent(new CylinderShape())
const transform = new Transform({ position: new Vector3(15, 20, 16) })
entity.addComponent(transform)
entity.addComponent(
  new OnPointerDown(() => {
    openExternalURL("https://docs.decentraland.org")
  })
)
engine.addEntity(entity)



// the hub
const seat = new Entity()
seat.addComponent(new GLTFShape('models/the hub complete3.glb'))

engine.addEntity(seat)


// flags
let flags = new Entity()
engine.addEntity(flags)

flags.addComponent(new GLTFShape('models/flags_binary.glb'))
flags.addComponent(
  new Transform({
    position: new Vector3(0, 0, 0),
    scale: new Vector3(0.98, 1, 1)

  })
)





// Screen

const screen = new Entity()
screen.addComponent(new CylinderShape())
screen.addComponent(
  new Transform({
    position: new Vector3(15, 4.5, 16),
    scale: new Vector3(8, 1, 8),
    rotation: new Quaternion(0, 0, 1, 0)
  })
)
engine.addEntity(screen)







const topscreen = new Entity()
topscreen.addComponent(new PlaneShape())
topscreen.addComponent(
  new Transform({
    position: new Vector3(22.3, 14.4, 16),
    scale: new Vector3(12, 4.5, 1),
    rotation: new Quaternion(0, -0.707, 0, 0.707),
  })
)

engine.addEntity(topscreen)



// Video stream link from Vimeo
const videoClip = new VideoClip(
  'https://player.vimeo.com/external/552481870.m3u8?s=c312c8533f97e808fccc92b0510b085c8122a875'
)
const videoTexture = new VideoTexture(videoClip)
videoTexture.play()
videoTexture.loop = true






// Adjust screen material to increase the brightness and clarity
const screenMaterial = new Material()
screenMaterial.albedoTexture = videoTexture
screenMaterial.emissiveTexture = videoTexture
screenMaterial.emissiveColor = Color3.White()
screenMaterial.emissiveIntensity = 0.8
screenMaterial.roughness = 1.0

screen.addComponent(screenMaterial)
topscreen.addComponent(screenMaterial)

