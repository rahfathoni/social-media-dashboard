export default async function UserDetail({data}) {
  const formatAddress  = () => {
    let res = '-';
    if(data.address) {
      res = '';
      if(data.address.suite) res = res + data.address.suite;
      if(data.address.street) res = res + ', ' + data.address.street;
      if(data.address.city) res = res + ', ' + data.address.city;
      if(data.address.zipcode) res = res + '. ' + data.address.zipcode;
    }
    return res;
  }

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
              <span className="tracking-wide">About</span>
          </div>
          <div className="text-gray-700">
              <div className="grid text-sm">
                  <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Name</div>
                      <div className="px-4 py-2">{data.name || '-'}</div>
                  </div>
                  <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Username</div>
                      <div className="px-4 py-2">{data.username || '-'}</div>
                  </div>
                  <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Email</div>
                      <div className="px-4 py-2">
                          {
                            <a className="text-blue-800" href={`mailto:${data.email}`}>{data.email}</a>
                            || '-'
                          }
                      </div>
                  </div>
                  <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Address</div>
                      <div className="px-4 py-2">{formatAddress()}</div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}