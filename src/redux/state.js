let renderEntireTree = () => {
    console.log('State changed');
}

let state = {
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Валерия Хайрулова', img: 'http://lychsveta.kz/wp-content/uploads/2018/10/anonim.png'},
            {id: 2, name: 'Кирилл Михеев', img: 'http://lychsveta.kz/wp-content/uploads/2018/10/anonim.png'},
            {id: 3, name: 'Лилия Хайрулова', img: 'http://lychsveta.kz/wp-content/uploads/2018/10/anonim.png'},
            {id: 4, name: 'Анна Кухарская', img: 'http://lychsveta.kz/wp-content/uploads/2018/10/anonim.png'},
            {id: 5, name: 'Борис Березин', img: 'http://lychsveta.kz/wp-content/uploads/2018/10/anonim.png'},
        ],
        messages: [
            {id: 1, message: 'Hello, how are you?'},
            {id: 2, message: 'Oh, I am programmer too!'},
        ],
    },
    profilePage: {
        posts: [
            {id: 1, message: 'Hello, how are you?', like: 15},
            {id: 2, message: 'It is my first post', like: 10},
        ],
        newPostText: 'О чём сегодня расскажете?)',
    },
    sidebar: {
        friendsList: ['Валерия', 'Кирилл', 'Лилия', 'Анна', 'Борис', 'Эмиль'],
    }
};

window.state = state;

export const addPost = () => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        like: 0,
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renderEntireTree(state);
};

export const updateChangePost = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
};

export const subscribe = (observer) => {
    renderEntireTree = observer;
}

export default state;