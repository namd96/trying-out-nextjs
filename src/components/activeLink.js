import { useRouter } from 'next/router'

function ActiveLink({ children, href }) {
  const router = useRouter()
 

  const handleClick = e => {
    e.preventDefault()
    // router.push(href) //router.push not changing the routes on client side without reloading hence removed
    window.open(href)
  }

  return (
      <div onClick={handleClick} >

    <a href={href}  style={{display : "none"}}>
     href for crawlers
    </a>
    {children}
      </div>
  )
}

export default ActiveLink