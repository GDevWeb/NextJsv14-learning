export default function Contact() {
  return (
    <div className="w-[80%] m-auto p-4 flex flex-col items-center justify-between gap-4 text-2xl bg-slate-400 rounded">
      <h1>Contact form</h1>
      <form>
        <div className="w-[80%] m-auto p-4 flex flex-col items-center justify-between">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="your name" />
        </div>
        <button type="submit" className="button-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
