export const userColumns = [
    { 
        field: "id" , headerName: "ID",width: 50 
    },
    {
        field: "user",headerName:"USER",width:200,
            renderCell:(params) =>{
                return (
                    <div className="cellWithImg">
                        <img className="cellImg" src={params.row.img} alt="avatar" />
                        {params.row.username}
                    </div>
                );
            }
    },    
    { 
        field: "email" , headerName: "EMAIL",width: 230 
    },
    { 
        field: "age" , headerName: "AGE",width: 70 
    },
    { 
        field: "status" , headerName: "STATUS",width: 90,
        renderCell: (params) => {
            return <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>;
        } 
    },
]
export const userRows = [
    {
        id: 1, 
        username: 'Snow', 
        img:"https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-837358.jpg&fm=jpg",
        status: 'active',
        email: 'snow@gmail.com',
        age: 25 ,  
    },
    {
        id: 2, 
        username: 'Kevin', 
        img:"https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?cs=srgb&dl=pexels-pixabay-39866.jpg&fm=jpg",
        status: 'passive',
        email: 'Kevin@gmail.com',
        age: 17 ,  
    },
    {
        id: 3, 
        username: 'Ash', 
        img:"https://images.pexels.com/photos/445109/pexels-photo-445109.jpeg?cs=srgb&dl=pexels-trinity-kubassek-445109.jpg&fm=jpg",
        status: 'pending',
        email: 'Ash@gmail.com',
        age: 32 ,  
    },
    {
        id: 4, 
        username: 'Lewis', 
        img:"https://images.pexels.com/photos/307847/pexels-photo-307847.jpeg?cs=srgb&dl=pexels-kaique-rocha-307847.jpg&fm=jpg",
        status: 'passive',
        email: 'Lewis@gmail.com',
        age: 44 ,  
    },
    {
        id: 5, 
        username: 'Charlote', 
        img:"https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-762080.jpg&fm=jpg",
        status: 'active',
        email: 'Charlote@gmail.com',
        age: 15 ,  
    },
    {
        id: 6, 
        username: 'Denique', 
        img:"https://images.pexels.com/photos/3436827/pexels-photo-3436827.jpeg?cs=srgb&dl=pexels-ike-louie-natividad-3436827.jpg&fm=jpg",
        status: 'pending',
        email: 'Denique@gmail.com',
        age: 38 ,  
    },
    {
        id: 7, 
        username: 'Snow', 
        img:"https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-837358.jpg&fm=jpg",
        status: 'active',
        email: 'snow@gmail.com',
        age: 25 ,  
    },
    {
        id: 8, 
        username: 'Kevin', 
        img:"https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?cs=srgb&dl=pexels-pixabay-39866.jpg&fm=jpg",
        status: 'passive',
        email: 'Kevin@gmail.com',
        age: 17 ,  
    },
    {
        id: 9, 
        username: 'Ash', 
        img:"https://images.pexels.com/photos/445109/pexels-photo-445109.jpeg?cs=srgb&dl=pexels-trinity-kubassek-445109.jpg&fm=jpg",
        status: 'pending',
        email: 'Ash@gmail.com',
        age: 32 ,  
    },
    {
        id: 10, 
        username: 'Lewis', 
        img:"https://images.pexels.com/photos/307847/pexels-photo-307847.jpeg?cs=srgb&dl=pexels-kaique-rocha-307847.jpg&fm=jpg",
        status: 'passive',
        email: 'Lewis@gmail.com',
        age: 44 ,  
    },
    {
        id: 11, 
        username: 'Charlote', 
        img:"https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-762080.jpg&fm=jpg",
        status: 'active',
        email: 'Charlote@gmail.com',
        age: 15 ,  
    },
    {
        id: 12, 
        username: 'Denique', 
        img:"https://images.pexels.com/photos/3436827/pexels-photo-3436827.jpeg?cs=srgb&dl=pexels-ike-louie-natividad-3436827.jpg&fm=jpg",
        status: 'pending',
        email: 'Denique@gmail.com',
        age: 38 ,  
    },
];