const Aside= () => {
    return <aside>
        <h1 className="text-center">Inicio De Sesión</h1>
        <form>
          <div className="form-group p-2">
            <label for="inputEmail">Email</label>
            <input type="email" className="form-control" id="inputEmail" placeholder="Email"/>
          </div>
          <div className="form-group p-2">
            <label for="inpuPassword">Password</label>
            <input type="password" className="form-control" id="inputPassword" placeholder="Password"/>
          </div>
          <div className="form-group p-2">
            <label className="form-check-label"><input type="checkbox"/>Remember me</label>
          </div>
          <button type="submit" className="btn btn-primary">Sign in</button>
        </form>
    </aside>
}
export default Aside;