import Date from "./Date";
import calendarData from "../calenderData.json";

function Calendar() {
  return (
    <div className="bg-white w-1/2  rounded-lg shadow-2xl p-8">
      <div className="pb-8 text-4xl font-bold">2023,04</div>
      <ul className="grid grid-cols-7 gap-4">
        {calendarData.map((v, i) => {
          // console.log(`${v} ${i + 1}`);
          return <Date key={i} date={v.date} day={v.day} todos={v.todos} />; //component를 map함수 사용하여 만들때 key값 설정 필수
        })}
      </ul>
    </div>
  );
}

export default Calendar;
