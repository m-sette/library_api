import User from '../model/userModel.js';

const options = {returnDocument: 'after'};

export const addBookLoan = async (req, res) => {
    console.log(req.body)
    try {
        const user = await User.findOneAndUpdate(
            {email: req.body.email},
            {books_loanded: req.body.book},
            options
        );
        res.json({msg: 'success', user});
    } catch (error) {
    }
};

export const returnBooks = async (req, res) => {
    try {
        const user = await User.findOneAndUpdate(
            {email: req.body.email},
            {books_loanded: []},
            options
        );
        res.json({msg: 'success', user});
    } catch (error) {
    }
};