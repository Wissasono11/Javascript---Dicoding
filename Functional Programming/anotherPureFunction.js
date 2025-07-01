// ini adalah contoh lain dari pure function
// menghitung total pesanan tanpa mengubah input

function calculateTotal(ordersItems){
    return ordersItems.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);

} 

// memfilter dan memetakan data tanpa mengubah array asli
function getActiveUsers(users){
    return users
        .filter(user => user.isActive)
        .map(user => user.username);
}

// membuat objek baru berdasarkan input tanpa mengubah input asli
function createUserProfile(user, address){
    return {
        id: user.id,
        username: user.username,
        email: user.email,
        address: {
            street: address.street,
            city: address.city,
            zip: address.zip
        }
    };
}

// menggabungkan objek tanpa mengubah objek asli
function mergeSettings(defaultSettings, userSettings){
    return {
        ...defaultSettings,
        ...userSettings
    };
}