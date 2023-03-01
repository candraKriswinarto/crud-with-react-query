export async function fetchPosts() {
  const response = await fetch('http://localhost:3000/posts');
  return response.json()
}

export async function fetchPost(id) {
  const response = await fetch(`http://localhost:3000/posts/${id}`);
  return response.json()
}

export async function createPost(newPost) {
  const response = await fetch(`http://localhost:3000/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newPost)
  });
  return response.json()
}

export async function updatePost(updatedPost) {
  const response = await fetch(`http://localhost:3000/posts/${updatedPost.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedPost)
  });
  return response.json()
}

export async function deletePost(id) {
  const response = await fetch(`http://localhost:3000/posts/${id}`, {
    method: "DELETE",
  });
  return response.json()
}