
import { useForm } from "react-hook-form";
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'


const AddProject = () => {



    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = data => {
  const details = [
    {
      name:data.name,
      type:data.type,
      server_link:data.server_link,
      client_link:data.client_link,
      live_link:data.live_link,
      image:[
       { 
        img1:data?.img1,
       img2:data?.img2,
        img3:data?.img3,
        img4:data?.img4,
        img5:data?.img5
        
        }
      
      
      ],
      feature:[
        {
          0:data?.f1},
          {1:data?.f2},
         { 2:data?.f3},
        
      ],
      technology:[
        {0:data.t1},
        {1:data.t2},
        {2:data.t3},
      ]
    }
  
  ]
        fetch("https://rayhan-shorker-portfolio-server.vercel.app/addProject", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(details),
          })
            .then((res) => res.json())
            .then((data) => {
            
                if(data.insertedId){
                    Swal.fire({
              title: 'success!',
              text: 'Project Added',
              icon: 'success',
              confirmButtonText: 'Cool'
            })
              
        
            }});
        
          
    }

     
    return (
        

<div>
<div className=" min-h-screen bg-base-200">
  <div className="hero-content ">
    
    <div className="card w-full max-w-3xl shadow-2xl bg-base-100">
    <div className="card-body">
    <form onSubmit={handleSubmit(onSubmit)} >
    {errors.exampleRequired && <span>This field is required</span>}
        <h1 className="text-center font-extrabold mt-5 mb-5 text-3xl">Add Product</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Project Name</span>
          </label>
          <input type="text" placeholder="project Name" {...register("name", { required: true })} className="input input-bordered" />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Project type</span>
          </label>
          <input type="text" placeholder="project Type" {...register("type", { required: true })} className="input input-bordered" />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Server link</span>
          </label>
          <input type="text" placeholder="Link" {...register("server_link", { required: true })} className="input input-bordered" />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Client link</span>
          </label>
          <input type="text" placeholder="Link" {...register("client_link", { required: true })} className="input input-bordered" />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Live link</span>
          </label>
          <input type="text" placeholder="Link" {...register("live_link", { required: true })} className="input input-bordered" />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input type="url" placeholder="Photo URL"  {...register("img1", { required: true })} className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input type="url" placeholder="Photo URL"  {...register("img2", { required: true })} className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input type="url" placeholder="Photo URL"  {...register("img3", { required: true })} className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input type="url" placeholder="Photo URL"  {...register("img4", { required: true })} className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input type="url" placeholder="Photo URL"  {...register("img5", { required: true })} className="input input-bordered" />
        </div>
          <label className="label">
            <span className="label-text">Feature</span>
          </label>
        <div className="form-control">
          <input type="text" placeholder="feature"  {...register("f1", { required: true })} className="input input-bordered" />
        </div>
        <div className="form-control">
          <input type="text" placeholder="feature"  {...register("f2", { required: true })} className="input input-bordered" />
        </div>
        <div className="form-control">
          <input type="text" placeholder="feature"  {...register("f3", { required: true })} className="input input-bordered" />
        </div>
          <label className="label">
            <span className="label-text">Technology</span>
          </label>
        <div className="form-control">
          <input type="text" placeholder="tech"  {...register("t1", { required: true })} className="input input-bordered" />
        </div>
        <div className="form-control">
          <input type="text" placeholder="tech"  {...register("t2", { required: true })} className="input input-bordered" />
        </div>
        <div className="form-control">
          <input type="text" placeholder="tech"  {...register("t3", { required: true })} className="input input-bordered" />
        </div>






        <div className="form-control mt-6">
          <button  className="btn btn-primary">Add Projects</button>
        </div>
    </form>
      </div>
    </div>
  </div>
</div>
</div>
    );
};

export default AddProject;