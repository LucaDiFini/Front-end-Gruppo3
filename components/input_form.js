export default function InputForm({ type,id, value, onChange, children }) {
    return (
        <div className="form-floating mb-3">
            <input 
                type={type} 
                className="form-control rounded-3" 
                id={id}
                value={value} 
                onChange={onChange} 
            />
            <label htmlFor={id}>{children}</label>
        </div>
    );
}