import { allNotes } from 'contentlayer/generated';
import type { Note } from '.contentlayer/generated/types';
import { compareDesc, format } from 'date-fns';

export default function Note() {
  const notes = allNotes.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );
  const yearByNotes: Map<number, Note[]> = notes.reduce((acc, note) => {
    const year = new Date(note.date).getFullYear();

    if (!acc.get(year)) {
      acc.set(year, []);
    }

    acc.get(year).push(note);

    return acc;
  }, new Map());

  return (
    <div className="group flex h-full w-full flex-col">
      {Array.from(yearByNotes.entries()).map(([year, notes], idx) => {
        return (
          <div key={year} className="group/year relative flex">
            <p
              className={`${
                idx !== 0 ? 'mt-8' : ''
              } mr-5 w-12 text-base font-medium transition group-hover/year:!opacity-100 group-hover:opacity-20`}
            >
              {year}
            </p>
            <ul
              className={`${
                idx !== 0 ? 'pt-8' : ''
              } flex flex-col gap-3 border-l border-gray-200 pl-4 transition group-hover/year:!opacity-100 group-hover:opacity-30`}
            >
              {notes.map((note) => (
                <li
                  key={note._raw.flattenedPath}
                  className="flex cursor-pointer items-center rounded-md px-1 transition hover:bg-gray-100 hover:!opacity-100 group-hover:opacity-70"
                >
                  <h3>{note.title}</h3>
                  <time
                    dateTime={note.date}
                    className="ml-2 block text-sm text-gray-400"
                  >
                    {format(new Date(note.date), 'MM.dd')}
                  </time>
                </li>
              ))}
            </ul>
            {/* <div
              className={`absolute left-14 h-3 w-3 translate-x-1/2 rounded-full bg-primary ${
                idx !== 0 ? 'top-8' : ''
              } group-hover/year:!opacity-100 group-hover:opacity-60`}
            /> */}
          </div>
        );
      })}
    </div>
  );
}
