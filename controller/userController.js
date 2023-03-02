import User from '../model/userModel.js';

export const addUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.json({ msg: 'success', user });
    } catch (error) {
        console.error(error);
    }
};

export const getUser = async (req, res) => {
    try {
        const { email } = req.params;
        const user = await User.find({ email });
        res.json({ msg: 'sucess', user });
    } catch (error) {
        console.error(error);
    }
};
