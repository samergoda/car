import { useEffect } from "react";

function Design() {
    function handleDisplayPop(e){

        const parentElement =e.target.closest('.hotspot')
        const pop = parentElement.querySelector('.content')
        const contents = document.querySelectorAll('.content');
        contents.forEach((c)=>c.classList.contains('active')?c.classList.remove('active'):'')
        if(e.type === "mouseenter"){
          pop.classList.add('active')
        }else{
        
          pop.classList.toggle('active')
        }
          }
    useEffect(() => {
        const hotspots = document.querySelectorAll('.hotspot');
    
        hotspots.forEach(hotspot => {
          const top = hotspot.dataset.top;
          const left = hotspot.dataset.left;
    
    
          hotspot.style.top = `${top}%`;
          hotspot.style.left = `${left}%`;
        });
      }, []);
    return (
        <div className="App">
      <img src="https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='car' />
    
      <div>
      <ul>
        <li>
          <div className='hotspot' data-top='62' data-left='50'>
            <button className='btn-hotspot' onClick={(e)=>handleDisplayPop(e)} onMouseEnter={(e)=>handleDisplayPop(e)}></button>
            <div className='content'>loremnjbjksdbjkdbvjksbvjk<br/>bdvmloremnjbjksd<br/>bjkdbvjksbvjkbdvmloremnjbjksdbjkdbvjksbvjkbdvm</div>
          </div>
        </li>

        <li>
          <div className='hotspot' data-top='50' data-left='47'>
            <button className='btn-hotspot' onClick={(e)=>handleDisplayPop(e)}  onMouseEnter={(e)=>handleDisplayPop(e)}></button>
            <div className='content'>loremnjbjksdbjkdbvjksbvjkbdvmloremnjbjksdbjkdbvjksbvjkbdvm
            <br/><a href='#'>this is a link</a></div>
          </div>
        </li>


        <li>
          <div className='hotspot' data-top='66' data-left='35'>
            <button className='btn-hotspot' onClick={(e)=>handleDisplayPop(e)} onMouseEnter={(e)=>handleDisplayPop(e)}></button>
            <div className='content'>lovmloremnjbjksdbjkdbvjksbvjkbdvmloremnjbjksdbjkdbvjksbvjkbdvm</div>
          </div>
        </li>
        
      </ul>
      </div> 
    </div>
    )
}

export default Design
