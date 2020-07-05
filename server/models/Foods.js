const keystone = require('keystone');

const { Types } = keystone.Field;

const Foods = new keystone.List('Foods');

Foods.add({
    name: { type: Types.Text, required: true, initial: true, index: true, max: 20, },
    description: { type: Types.Text, required: true, initial: true, index: true, max: 100 },
    price: { type: Types.Text, required: true, initial: true, index: true, max: 10 },
    image: { type: Types.CloudinaryImages, required: true, initial: true },
});

Foods.register();

