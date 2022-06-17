import Pagination from "../../Pagination";

const BrandsTable = () => {
  return (
    <div className=" bg-white p-[2.4rem] rounded-[1.2rem]">
      <input
        className="border ml-auto  h-[48px] w-full max-w-[362px] px-[16px] focus:border-gray-default text-[14px] rounded-2xl border-gray-default placeholder:text-gray-default mb-[3rem]"
        placeholder="Search..."
      ></input>
      <div className="w-[100%] overflow-x-scroll scroll_hide">
        <table className=" w-full border-l border-gray-lighter border-collapse">
          <thead className="text-bl text-black-light whitespace-nowrap bg-gray-lightest-2 caption_heavy h-[48px] font-medium">
            <tr>
              <th className="border-b border-r border-gray-lighter font-medium text-right pt-[10px] px-[16px] w-[119px]">
                <span className=" align-text-bottom mt-auto">Date Added</span>
              </th>
              <th className="border-b border-r border-gray-lighter font-medium text-right pt-[10px] px-[16px] w-[275px]">
                <span className=" align-text-bottom mt-auto">Brand Name</span>
              </th>
              <th className="border-b border-r border-gray-lighter font-medium text-right pt-[10px] px-[16px] w-[189px]">
                <span className=" align-text-bottom mt-auto">Adverts and Campaigns</span>
              </th>
              <th className="border-b border-r border-gray-lighter font-medium text-right pt-[10px] px-[16px]">
                <span className=" align-text-bottom mt-auto">Total Revenue</span>
              </th>
            </tr>
          </thead>
          <tbody className="caption_light text-black-default whitespace-nowrap h-[48px]">
            <tr>
              <td className="border-b border-r border-gray-lighter p-[16px] text-right align-text-bottom">12 Nov 2021</td>
              <td className="border-b border-r border-gray-lighter p-[16px] text-right align-text-bottom">Pepsi</td>
              <td className="border-b border-r border-gray-lighter p-[16px] text-right align-text-bottom">4</td>
              <td className="border-b border-r border-gray-lighter p-[16px] text-right align-text-bottom"># 8,000,000</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-[28px] flex justify-between items-center px-[20px] caption_light flex-wrap">
        <p>showing result 1-6 of 17 items</p>
        <Pagination />
      </div>
    </div>
  );
};

export default BrandsTable;
