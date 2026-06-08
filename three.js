// three.js — sample Three.js scene setup

const scene = {
  objects: [],
  lights: [],
  camera: null,
};

function createCamera(fov = 75, aspect = 16 / 9, near = 0.1, far = 1000) {
  return { type: "PerspectiveCamera", fov, aspect, near, far, position: { x: 0, y: 0, z: 5 } };
}

function createMesh(geometry, material) {
  return { type: "Mesh", geometry, material, position: { x: 0, y: 0, z: 0 } };
}

function createLight(color = 0xffffff, intensity = 1) {
  return { type: "AmbientLight", color, intensity };
}

function addToScene(object) {
  if (object.type === "AmbientLight" || object.type === "DirectionalLight") {
    scene.lights.push(object);
  } else {
    scene.objects.push(object);
  }
}

function initScene() {
  scene.camera = createCamera();

  const geometry = { type: "BoxGeometry", width: 1, height: 1, depth: 1 };
  const material = { type: "MeshBasicMaterial", color: 0x00ff00 };
  const cube = createMesh(geometry, material);
  addToScene(cube);

  const light = createLight(0xffffff, 1);
  addToScene(light);

  return scene;
}

function renderScene(scene) {
  console.log("Rendering scene with", scene.objects.length, "objects and", scene.lights.length, "lights");
  scene.objects.forEach((obj, i) => {
    console.log(`  Object ${i}: ${obj.type} at (${obj.position.x}, ${obj.position.y}, ${obj.position.z})`);
  });
}

module.exports = { initScene, renderScene, createCamera, createMesh, createLight, addToScene };

if (require.main === module) {
  const scene = initScene();
  renderScene(scene);
}
