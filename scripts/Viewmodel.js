const weaponpos = { x: 0.11, y: -0.50, z: 0.65 }

pc.app.on('Player:Focused', function (state) {
    try {
        if (state) {
        } else {
            pc.app.root.findByName("WeaponCenter").setLocalPosition(weaponpos.x, weaponpos.y, weaponpos.z)
        }
    } catch (error) {
        console.log(error)
    }
});

// Developed in collaboration by: Captain Cool and KAAN '2023/11/29'