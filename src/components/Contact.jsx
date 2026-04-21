export default function Contact() {
  return (
    <section id="contact" className="my-8">
      <h2 className="text-2xl font-bold mb-4">Холбоо барих</h2>
      <form className="flex flex-col gap-4 max-w-md">
        <input placeholder="Таны нэр" className="border p-2 rounded" />
        <input placeholder="И-мэйл хаяг" className="border p-2 rounded" />
        <textarea placeholder="Танилцуулга" className="border p-2 rounded"></textarea>
        <button className="bg-yellow-400 text-blue-900 font-bold p-2 rounded">
          Илгээх
        </button>
      </form>
    </section>
  );
}
