export default function BtnAdd({ item, text, properties = "", action }) {
    return (
        <button type="button" onClick={() => action(item) } className={`relative overflow-hidden bg-secondary 
        transition-transform duration-1000
        rounded-sm text-white h-[44px]
        py-2 px-4 font-button 
        after:bottom-0 after:left-[50%] 
        after:w-4 after:h-4 
        after:bg-primary
        after:content-[""] after:absolute
        after:rounded-full after:transition-all
        after:translate-x-[50%] after:translate-y-full
        z-[0] group-hover hover:after:scale-[50]
        ${properties}`}><span className="relative z-10">{text}</span></button>
    )
}