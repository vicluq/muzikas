import React from 'react';
import { useOutlet } from 'react-router-dom';

function SupplierLayout() {
      const outlet = useOutlet();

      return(
            <div>
                  <div></div>
                  <div>{outlet}</div>
            </div>
      );
}

export default SupplierLayout;