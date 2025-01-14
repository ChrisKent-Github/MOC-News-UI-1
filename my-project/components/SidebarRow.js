

function SidebarRow({src, Icon, title, setCategory}) {

    //   "localhost:8080/category/find_category?category=" + title

    return (
                                                                                                     
        <div onClick={() => setCategory(title)} className="flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer">
        
            
            {src && (
                <Image 
                className="rounded-full"
                src={src}
                width={30}
                height={30}
                layout="fixed"
                />
            )}
            {Icon && <Icon className="h-8 w-8 _text-blue-500" />}
            <p className="hidden sm:inline-flex font-medium" >
                {title}
            </p>
        </div>
    );
}

export default SidebarRow