import React from "react";

const Event_Delegation = () => {
  const handleClick = (e) => {
    const { role } = e.target.dataset;
    if (role) {
      console.log(`Clicked on a cell with role: ${role}`);
    } else {
      console.log("Clicked outside a data-role cell");
    }
  };

  return (
    <div>
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table
          className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm"
          onClick={(e) => handleClick(e)}
        >
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th
                className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"
                data-role="header"
              >
                Name
              </th>
              <th
                className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"
                data-role="header"
              >
                Date of Birth
              </th>
              <th
                className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"
                data-role="header"
              >
                Role
              </th>
              <th
                className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"
                data-role="header"
              >
                Salary
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            <tr>
              <td
                className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"
                data-role="name"
              >
                John Doe
              </td>
              <td
                className="whitespace-nowrap px-4 py-2 text-gray-700"
                data-role="dob"
              >
                24/05/1995
              </td>
              <td
                className="whitespace-nowrap px-4 py-2 text-gray-700"
                data-role="role"
              >
                Web Developer
              </td>
              <td
                className="whitespace-nowrap px-4 py-2 text-gray-700"
                data-role="salary"
              >
                $120,000
              </td>
            </tr>

            <tr>
              <td
                className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"
                data-role="name"
              >
                Jane Doe
              </td>
              <td
                className="whitespace-nowrap px-4 py-2 text-gray-700"
                data-role="dob"
              >
                04/11/1980
              </td>
              <td
                className="whitespace-nowrap px-4 py-2 text-gray-700"
                data-role="role"
              >
                Web Designer
              </td>
              <td
                className="whitespace-nowrap px-4 py-2 text-gray-700"
                data-role="salary"
              >
                $100,000
              </td>
            </tr>

            <tr>
              <td
                className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"
                data-role="name"
              >
                Gary Barlow
              </td>
              <td
                className="whitespace-nowrap px-4 py-2 text-gray-700"
                data-role="dob"
              >
                24/05/1995
              </td>
              <td
                className="whitespace-nowrap px-4 py-2 text-gray-700"
                data-role="role"
              >
                Singer
              </td>
              <td
                className="whitespace-nowrap px-4 py-2 text-gray-700"
                data-role="salary"
              >
                $20,000
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Event_Delegation;
