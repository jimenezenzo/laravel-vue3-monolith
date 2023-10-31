<template>
    <div class="max-w-2xl m-auto">
        <div class="bg-white shadow-md rounded-md mt-10 px-5 py-10">
            <form @prevent.default>
                <div class="mb-4">
                    <label class="text-slate-800" for="email">
                        Email:
                    </label>
                    <input type="email" id="email" class="mt-2 w-full p-3 bg-gray-50" name="email" placeholder="Tu Email" />
                </div>

                <div class="mb-4">
                    <label class="text-slate-800" for="password">
                        Password:
                    </label>
                    <input type="password" id="password" class="mt-2 w-full p-3 bg-gray-50" name="password"
                        placeholder="Tu Password" ref={passwordRef} />
                </div>

                <input type="submit" value="Iniciar Sesión"
                    class="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer" />
            </form>
        </div>
    </div>
</template>