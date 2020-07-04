const keystone = require('keystone');

const { Types } = keystone.Field;

const Header = new keystone.List('Header');

Header.add({
    LogoName: { type: Types.Text, required: true, initial: true, index: true },
    image: { type: Types.CloudinaryImages, require: true, initial: true, },
});

Header.register();