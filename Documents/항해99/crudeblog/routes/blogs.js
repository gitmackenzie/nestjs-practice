//blog routes

const express = require('express');
const Blog = require('./../models/Blog')
const router = express.Router();

router.get('/new', (request, response)=>{
    response.render('new');
});

// view route
// response.redirect('blogs/${blog.id}') 여기서 blog.id 파라메터를 써서 쓴 라우터입니다.
// 그런데 redirect하면 Cannot GET /blogs/blogs/$%7Bblog.id%7D 에러가 납니다.
// 'blogs/${blog.id}' 앞에 blogs/를 '/'이나 '/new'로 써도 마찬가지입니다.
// 왜 아이디를 못 가져오는 것일까요?
// router.get('/:id', (request, response)=> {
//     response.send(request.params.id);
// });

router.get('/:slug', async (request, response)=> {
    let blog = await Blog.findOne({slug:request.params.slug});
    if(blog) {
        response.render('show', {blog:blog});
    } else {
        response.redirect('/')
    };
});

//route that handles new post
router.post('/new', async (request, response)=> {

    let blog = new Blog({
        title: request.body.title,
        author: request.body.author,
        description: request.body.description,
    });

    try {
        blog = await blog.save();
        response.redirect(`${blog.slug}`);
    } catch (error) {
        console.log(error);
    }
});


// route that handles edit view
router.get('/edit/:id', async(request, response)=>{
    let blog = await Blog.findById(request.params.id);
    response.render('edit', {blog:blog});
});

// route to handle updates
router.put('/:id', async (request, response)=>{
    request.blog = await Blog.findById(request.params.id)
    let blog = request.blog
    blog.title = request.body.title
    blog.author = request.body.author
    blog.description = request.body.description

    try {
        blog = await blog.save();
        // redirect to the view route
        response.redirect(`/blogs/${blog.slug}`)
    } catch (error) {
        console.log(error)
        response.redirect(`/blogs/edit${blog.id}`, {blog: blog});
    }
});

// 삭제 라우터
router.delete('/:id', async(request, response)=>{
    await Blog.findByIdAndDelete(request.params.id);
    response.redirect('/');
})

module.exports = router;