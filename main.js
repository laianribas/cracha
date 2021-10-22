const linkSocialMedia = {
  github: 'laianribas',
  youtube: 'channel/UCgZ0hKjUfxmQUILxPHxm8Cg',
  instagram: 'laianribas',
  facebook: 'laian.ribas',
  twitter: 'laianribas'
}

function chageSocialMedia() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linkSocialMedia[social]}/`
  }
}

chageSocialMedia()

function gitHubProfile() {
  const url = `https://api.github.com/users/${linkSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userAvatar.src = data.avatar_url
      description.textContent = data.bio
      userLink.href = data.html_url
      userLogin.textContent = data.login
    })
}

gitHubProfile()
