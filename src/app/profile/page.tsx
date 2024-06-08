"use client";

import Image from "next/image";
import Spinner from "../../components/spinner";
import { useRouter } from "next/navigation";
import useCurrentUser from "../../hooks/useCurrentUser";

const Profile = () => {
  const navigate = useRouter();
  const { data, isLoading } = useCurrentUser();

  console.log(data);

  return (
    <main className="flex items-center h-screen justify-center bg-black ">
      {isLoading ? (
        <Spinner size={100} />
      ) : (
        <div className="flex flex-col">
          <h1 className="text-3xl md:text-6xl text-white text-center">
            Who is watching?
          </h1>
          <div className="flex items-center justify-center gap-8 mt-10">
            <div onClick={() => navigate.push("/home")}>
              <div className="group flex-row w-44 mx-auto">
                <div className="w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden">
                  <Image
                    src={data.image || "/Netflix-avatar.png"}
                    alt="ava"
                    width={400}
                    height={400}
                  />
                </div>
                <div className="mt-4 text-gray-400 text-2xl text-center group-hover:text-white">
                  {data.name}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Profile;
