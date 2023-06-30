$(document).ready(function () {

  var get_storage_user = localStorage.getItem('current_user');
  var current_user = JSON.parse(get_storage_user);

  // if (current_user.type_user == "admin") {
  role_admin()
  window.addEventListener('hashchange', function (event) {
    direction = window.location.hash;
    if (direction == "#access/rol") {
      role_admin();
    }
    else if (direction == "#access/user") {
      user_admin()
    }
    else if (direction == "#maintenance/place") {
      place_admin();
    }
    else if (direction == "#maintenance/dependence") {
      dependence_admin();
    }
    else if (direction == "#person/data") {
      data_admin();
    }
    else if (direction == "#person/employe") {
      employe_admin();
    }
    else if (direction == "#kit/all") {
      kit_admin()
    }
  })
  // }

});

//path 
function role_admin() {
  window.location.hash = "#access/rol";
  $("#body-content").html(content_rol);
}
function user_admin() {
  $("#body-content").html("sistema");
}
function place_admin() {
  $("#body-content").html("sedes");
}
function dependence_admin() {
  $("#body-content").html("dependencias");
}
function data_admin() {
  $("#body-content").html("datos");
}
function employe_admin() {
  $("#body-content").html("empleados");
}

function kit_admin() {
  $("#body-content").html(content_kit);
  get_table_kit_all();
}
//-----------------------------------------------
const content_rol = () => {
  return `  <div
    id="addModalDepartaments"
    tabindex="-1"
    aria-hidden="true"
    style="background: rgba(0, 0, 0, 0.082)"
    class="hidden fixed top-0 left-0 backdrop-blur-sm right-0 z-50 items-center justify-center w-full p-4 overflow-y-auto md:inset-0 max-h-full h-[calc(100vh-4rem)] flex mt-[4rem]"
  >
    <div
      class="relative w-full h-auto max-w-2xl max-h-full my-2"
      style="z-index: 99999"
    >
      <!-- Modal content -->
      <form
        action="#"
        class="relative bg-white rounded-lg shadow dark:bg-gray-700 h-full"
      >
        <!-- Modal header -->
        <div
          class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600"
        >
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            Nueva Area
          </h3>
          <button
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="addModalDepartaments"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <!-- Modal body -->
        <div class="p-6 space-y-6">
          <div class="flex flex-col gap-3">
            <div class="col-span-6 sm:col-span-3">
              <label
                for="department"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Departamento</label
              >
              <select name="" id="select_departments" class="w-full p-2 rounded-md border-gray-300 bg-gray-50">

              </select>
            </div>
            <div class="">
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Nombre</label
              >
              <input
                type="text"
                name="first-name"
                id="name_area"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Desarrollo"
                required=""
              />
            </div>
            <div class="">
              <label
                for="last"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Descripcion</label
              >
              <textarea
                name="last-name"
                id="description_area"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Green"
                required=""
              ></textarea>
            </div>
          </div>
        </div>
        <!-- Modal footer -->
        <div
          class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600 justify-end"
        >
          <button
            id="add_area"
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Guardar
          </button>
        </div>
      </form>
    </div>
  </div>
  <!-- end modal -->
  <div class="px-4 overflow-y-auto bg-white">
  <div class="text-gray-500 text-sm"><a>Accesos</a><span>&nbsp/&nbsp</><a class="text-gray-700">Roles<a/></div>
    <div class="flex justify-between mb-4">
      <span class="text-lg font-medium text-gray-700">Roles De Usuarios</span>
      <button
      class="bg-[var(--new-button)] py-2 px-4 text-white rounded-md hover:bg-[var(--hover-new-button)]"
        data-modal-target="addModalDepartaments"
        data-modal-toggle="addModalDepartaments"
        type="button"
      >
        +&nbsp;Nuevo
      </button>
    </div>
    <div class="w-full">
      <!-- table -->
      <table id="table-rol" class="w-full text-left overflow-x-auto">
        <thead class="bg-gray-100">
          <tr class="text-gray-500 text-sm">
            <th
              class="px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800"
            >
              Fecha
            </th>
            <th
              class="px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800"
            >
              Nombre
            </th>
            <th
              class="px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800"
            >
              Descripcion
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody id="table-rol-render" class="text-gray-500 text-sm">
          <tr class="hover:bg-gray-100">
            <td class="border-b">nombre</td>
            <td class="border-b">nombre</td>
            <td class="border-b">nombre</td>
            <td class="border-b"><div class="relative group inline-block text-left">
            <div>
              <button type="button" class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                Options
                <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>
            <div class="absolute group-hover:block hidden right-0 z-10 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
              <div role="none">
                <a href="#" class="flex hover:bg-gray-100 text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg>
               Editar</a>
                <a href="#" class="flex hover:bg-gray-100 text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
               Eliminar</a>
              </div>
            </div>
          </div></td>
          </tr>
          <tr class="hover:bg-gray-100">
            <td class="border-b">nombre</td>
            <td class="border-b">nombre</td>
            <td class="border-b">nombre</td>
            <td class="border-b"><div class="relative group inline-block text-left">
            <div>
              <button type="button" class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                Options
                <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>
            <div class="absolute group-hover:block hidden right-0 z-10 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
              <div role="none">
                <a href="#" class="flex hover:bg-gray-100 text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg>
               Editar</a>
                <a href="#" class="flex hover:bg-gray-100 text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
               Eliminar</a>
              </div>
            </div>
          </div></td>
          </tr>
          <tr class="hover:bg-gray-100">
            <td class="border-b">nombre</td>
            <td class="border-b">nombre</td>
            <td class="border-b">nombre</td>
            <td class="border-b"><div class="relative group inline-block text-left">
            <div>
              <button type="button" class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                Options
                <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>
            <div class="absolute group-hover:block hidden right-0 z-10 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
              <div role="none">
                <a href="#" class="flex hover:bg-gray-100 text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg>
               Editar</a>
                <a href="#" class="flex hover:bg-gray-100 text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
               Eliminar</a>
              </div>
            </div>
          </div></td>
          </tr>
          <tr class="hover:bg-gray-100">
            <td class="border-b">nombre</td>
            <td class="border-b">nombre</td>
            <td class="border-b">nombre</td>
            <td class="border-b"><div class="relative group inline-block text-left">
            <div>
              <button type="button" class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                Options
                <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>
            <div class="absolute group-hover:block hidden right-0 z-10 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
              <div role="none">
                <a href="#" class="flex hover:bg-gray-100 text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg>
               Editar</a>
                <a href="#" class="flex hover:bg-gray-100 text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
               Eliminar</a>
              </div>
            </div>
          </div></td>
          </tr>
          
        </tbody>
      </table>
  </div>

  <script>

  
      $("#table-rol").dataTable({
        //   paging: false,
        // ordering: false,
        // info: false,
      });
      $("#table-rol_length").removeClass("dataTables_length")
  
  </script>`
}

const content_kit = () => {
  return `    <div
    id="addModalDepartaments"
    tabindex="-1"
    aria-hidden="true"
    style="background: rgba(0, 0, 0, 0.082)"
    class="hidden fixed top-0 left-0 backdrop-blur-sm right-0 z-50 items-center justify-center w-full p-4 overflow-y-auto md:inset-0 max-h-full h-[calc(100vh-4rem)] flex mt-[4rem]"
  >
    <div
      class="relative w-full h-auto max-w-2xl max-h-full my-2"
      style="z-index: 99999"
    >
      <!-- Modal content -->
      <form
        action="#"
        class="relative bg-white rounded-lg shadow dark:bg-gray-700 h-full"
      >
        <!-- Modal header -->
        <div
          class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600"
        >
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            Nueva Area
          </h3>
          <button
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="addModalDepartaments"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <!-- Modal body -->
        <div class="p-6 space-y-6">
          <div class="flex flex-col gap-3">
            <div class="col-span-6 sm:col-span-3">
              <label
                for="department"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Departamento</label
              >
              <select name="" id="select_departments" class="w-full p-2 rounded-md border-gray-300 bg-gray-50">

              </select>
            </div>
            <div class="">
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Nombre</label
              >
              <input
                type="text"
                name="first-name"
                id="name_area"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Desarrollo"
                required=""
              />
            </div>
            <div class="">
              <label
                for="last"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Descripcion</label
              >
              <textarea
                name="last-name"
                id="description_area"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Green"
                required=""
              ></textarea>
            </div>
          </div>
        </div>
        <!-- Modal footer -->
        <div
          class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600 justify-end"
        >
          <button
            id="add_area"
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Guardar
          </button>
        </div>
      </form>
    </div>
  </div>
  <!-- end modal -->
  <div class="px-4 overflow-y-auto bg-white">
  <div class="text-gray-500 text-sm"><a>Kit</a><span>&nbsp/&nbsp</><a class="text-gray-700">All<a/></div>
    <div class="flex justify-between mb-4">
      <span class="text-lg font-medium text-gray-700">Equipos de computos</span>
      <button
        class="bg-[var(--new-button)] py-2 px-4 text-white rounded-md hover:bg-[var(--hover-new-button)]"
        data-modal-target="addModalDepartaments"
        data-modal-toggle="addModalDepartaments"
        type="button"
      >
        +&nbsp;Nuevo
      </button>
    </div>

    <div class="flex">
      <div class="filter w-[200px]">
        <ul class="text-sm text-gray-500">
        <li><button class="hover:text-gray-700" onclick="get_table_kit_all()">All</button></li>
          <li>
            <button class="hover:text-gray-700 filter-eco">Ecoturismo</button>
            <div class="flex flex-col hidden filter-eco-view">
              <button class="hover:text-gray-700 flex ml-10" onclick="get_table_eco_lab001()"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
</svg>
 LAB-ECO</button>
              <button class="hover:text-gray-700 flex ml-10"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
</svg>
 LAB-ECO</button>
              <button class="hover:text-gray-700 flex ml-10"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
</svg>
 LAB-ECO</button>
              <button class="hover:text-gray-700 flex ml-10"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
</svg>
 LAB-ECO</button>
            </div>
          </li>
          <li>
            <button class="hover:text-gray-700 filter-eco">Forestal</button>
            <div class="flex flex-col hidden filter-eco-view">
              <button class="hover:text-gray-700 flex ml-10" onclick="get_table_for_lab001()"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
</svg>
 LAB-ECO</button>
              <button class="hover:text-gray-700 flex ml-10"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
</svg>
 LAB-ECO</button>
              <button class="hover:text-gray-700 flex ml-10"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
</svg>
 LAB-ECO</button>
              <button class="hover:text-gray-700 flex ml-10"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
</svg>
 LAB-ECO</button>
            </div>
          </li>
          <li>
            <button class="hover:text-gray-700 filter-eco">Agroindustrial</button>
            <div class="flex flex-col hidden filter-eco-view">
              <button class="hover:text-gray-700 flex ml-10"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
</svg>
 LAB-ECO</button>
              <button class="hover:text-gray-700 flex ml-10"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
</svg>
 LAB-ECO</button>
              <button class="hover:text-gray-700 flex ml-10"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
</svg>
 LAB-ECO</button>
              <button class="hover:text-gray-700 flex ml-10"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
</svg>
 LAB-ECO</button>
            </div>
          </li>
        </ul>
      </div>
    <div class="w-full">
      <!-- table -->
      <table id="table-kit-all" class="w-full text-left overflow-x-auto">
        <thead class="bg-gray-100">
          <tr class="text-gray-500 text-sm">
            <th
              class="px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800"
            >
              Key
            </th>
            <th
              class="px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800"
            >
              Arquitectura
            </th>
            <th
              class="px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800"
            >
              Disk
            </th>
            <th
            class="px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800"
           >
            Fabricante
           </th>
           <th
            class="px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800"
           >
            Modelo
           </th>
            <th
            class="px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800"
         >
          Nombre
         </th>
          <th
         class="px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800"
          >
      Procesador
         </th>
        <th
       class="px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800"
        >
           Ram
        </th>
         <th
       class="px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800"
        >
               Serie
          </th>
<th
class="px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800"
>
Tamaño de disco
</th>
            <th></th>
          </tr>
        </thead>
        <tbody id="table-kit-render" class="text-gray-500 text-sm">
          
        </tbody>
      </table>
  </div>
</div>

  <script>
var botones = document.querySelectorAll('.filter-eco');

// Agregamos un controlador de eventos a cada botón
for (var i = 0; i < botones.length; i++) {
  botones[i].addEventListener('click', function() {
    // Mostramos u ocultamos la sublista correspondiente
    var sublista = this.nextElementSibling;
    if (sublista.classList.contains('hidden')) {
      sublista.classList.remove('hidden');
    } else {
      sublista.classList.add('hidden');
    }
  });
}

  </script>`
}