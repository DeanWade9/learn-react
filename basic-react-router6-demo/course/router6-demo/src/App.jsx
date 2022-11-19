import React, {Suspense} from 'react';
import {NavLink, useRoutes} from 'react-router-dom';
import Loading from './pages/Loading';

import routes from './routes';

export default function App() {
  function computedClassName({isActive}) {
    return isActive ? 'list-group-item highlight' : 'list-group-item';
  }

  // 根据路由表生成对应的路由规则
  const element = useRoutes(routes);

  return (
    <div>
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <div className="page-header">
            <h2>React Router Demo</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            {/* 路由链接 */}
            <NavLink className={computedClassName} to="/about">
              About
            </NavLink>
            <NavLink className={computedClassName} to="/home">
              Home
            </NavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              {/* 注册路由 */}
              <Suspense fallback={<Loading />}>{element}</Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
