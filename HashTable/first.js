let user = {
    age: 22,
    name: 'Mujtaba',
    magic: true,
    scream: function() {
        console.log('ahhhhh!');
    }
}

user.age; //O(1)
user.spell = 'Mujtaba Ahmady';//O(1)
user.scream();//O(1)